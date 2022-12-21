import { Document, Schema, Model, model, Error } from 'mongoose'

export interface IExamApplication extends Document {
  photo: String
  examId: String
  status: String
  userId: String
  registrationFee: Number;
  administrativeFee: Number;
  adminAssigned: String | null
  paid: Boolean,
  type: String,
}

export const examApplicationSchema = new Schema({
  photo: String,
  examId: String,
  status: String,
  userId: String,
  registrationFee: Number,
  administrativeFee: Number,
  adminAssigned: {
    type:  String,
    default: null
  },
  paid: Boolean,
  type: String,
})

export const ExamApplication: Model<IExamApplication> = model<IExamApplication>('ExamApplication', examApplicationSchema)
