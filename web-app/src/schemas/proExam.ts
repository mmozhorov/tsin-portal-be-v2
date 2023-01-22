import { Document, Schema, Model, model } from 'mongoose'

export interface IProExam extends Document {
  id: string,
  name: string,
  fee: string,
  year: string,
  status: string,
  usersIds: string[]
}

export const ProExamSchema: Schema = new Schema({
  id: String,
  name: String,
  fee: String,
  year: String,
  status: String,
  usersIds: [String]
})

export const ProExam: Model<IProExam> = model<IProExam>('ProExam', ProExamSchema)
