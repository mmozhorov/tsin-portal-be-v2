import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProExam, IProExam } from '../schemas/proExam'
import { ProUserApplication, IProUserApplication } from '../schemas/proUserApplication';

@Injectable()
export class ProService {
  constructor(
    @InjectModel('ProExam')
    private proExamModel: Model<IProExam>,
    @InjectModel('ProUserApplication')
    private proUserApplicationModel: Model<IProUserApplication>
  ) {}

  async getProExams(): Promise<IProExam[]> {
    const exams = await this.proExamModel.find().exec();
    // const userApplications = await this.proUserApplicationModel.find({});
    return exams;
  }
}
