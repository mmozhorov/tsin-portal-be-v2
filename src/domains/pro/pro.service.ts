import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { v4 } from 'uuid';
import { IProExam } from '../../schemas/proExam'
import { IProUserApplication } from '../../schemas/proUserApplication';
import { BaseError, InternalError, NotFoundError, ValidationError } from "../../utils/typed-errors";
import { ProExamStatuses } from "./pro.interface";

@Injectable()
export class ProService {
  constructor(
    @InjectModel('ProExam')
    private proExamModel: Model<IProExam>,
    @InjectModel('ProUserApplication')
    private proUserApplicationModel: Model<IProUserApplication>
  ) {}
  private async getProApplicationsForUser (userId: string) { return this.proUserApplicationModel.find({userId})};
  private async getProExamsForUser (userId: string) {
    const exams = await this.proExamModel.find({});
    return exams.filter(exam => exam.usersIds.find( id => id === userId ))
  }
  private getMergedUserApplicationWithRelatedProExam (
    application: IProUserApplication,
    exam: IProExam
  ): Partial<IProUserApplication> & { exam: IProExam } {
    const { _id, userId, examId, status, steps } = application;
    return { id: _id, userId, examId, status, steps, exam }
  }
  private getProExamUpdatedUsersIds ( previousUsersIds: string[], newUserId: string): string[] {
    return [...previousUsersIds, newUserId].filter((value, index, array) => array.indexOf(value) === index)
  }
  public async getProExams(): Promise<IProExam[]> {
    return this.proExamModel.find();
  }
  public async createProExam(body: Partial<IProExam>): Promise<IProExam | BaseError> {
    const { name, fee, year, status = ProExamStatuses.OPENED } = body;
    const existingExam = await this.proExamModel.findOne({name}).exec();
    if (existingExam) {
      return new ValidationError("Exam is already exists");
    }
    try {
      return await this.proExamModel.create({ id: v4(), name, fee, year, status, usersIds: [] })
    }
    catch (e: any) {
      return new InternalError(e?.message || "Something went wrong");
    }
  }
  public async getProUserApplications(
    userId: string
  ): Promise<Partial<IProUserApplication> & Partial<{ exam: IProExam }>[] | BaseError> {
    try {
      const [applications, exams] = await Promise.all([
        this.getProApplicationsForUser(userId),
        this.getProExamsForUser(userId)
      ])
      return applications.map(
        application => {
          const examForUserApplication = exams.find(({id}) => id === application.examId)
          if (examForUserApplication) {
            return this.getMergedUserApplicationWithRelatedProExam(
              application,
              examForUserApplication
            )
          }
        }
      );
    }
    catch (e: any) {
      return new InternalError(e?.message || "Something went wrong");
    }
  }
  public async createUserApplication(
    body: Partial<IProUserApplication>
  ): Promise<Partial<IProUserApplication> & Partial<{ exam: IProExam }> | BaseError> {
    const { userId, examId, steps = [] } = body;
    const [desiredExam, existingUserApplication] = await Promise.all([
      this.proExamModel.findOne({id: examId}).lean(),
      this.proUserApplicationModel.findOne({userId, examId}).lean()
    ])
    if (!desiredExam) {
      return new NotFoundError("Exam was not found")
    }
    if (existingUserApplication?.status === 'Completed') {
      return new ValidationError("User already applied to Exam");
    }
    const [userApplication] = await Promise.all([
      this.proUserApplicationModel.findOneAndUpdate(
        { userId, examId },
        { userId, examId, status: 'In Progress', steps },
        { new: true, upsert: true }
      ),
      this.proExamModel.updateOne(
        { id: examId },
        {
          usersIds: this.getProExamUpdatedUsersIds(
            desiredExam.usersIds,
            userId
          )
        }
      )
    ])
    const updatedExam = await this.proExamModel.findOne({id: examId});
    if (!updatedExam) {
      return new NotFoundError("Exam was not found");
    }
    return this.getMergedUserApplicationWithRelatedProExam(
      userApplication,
      updatedExam
    )
  }
}
