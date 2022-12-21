import { Document, Schema, Model, model, Error } from 'mongoose'

export interface IExamGroup extends Document {
  examType: String,
  type: String
  registrationFee: Number
  administrativeFee: Number
}

export const examGroupSchema = new Schema({
  examType: String,
  type: String,
  registrationFee: Number,
  administrativeFee: Number,
})

export const ExamGroup: Model<IExamGroup> = model<IExamGroup>('ExamGroup', examGroupSchema)
