import { Document, Schema, Model, model, Error } from 'mongoose'

export interface IExam extends Document {
  id: String
  mcqdate: string,
  mcqtype: string,
  oscedate: string,
  oscetype: String,
  capacity: Number,
  activate: Boolean,
  usersIds: String[],
  seatsAvailable: Number
  type: String
}

export const examSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  mcqdate: String,
  mcqtype: String,
  oscedate: String,
  oscetype: String,
  capacity: Number,
  activate: Boolean,
  usersIds: [String],
  seatsAvailable: Number,
  type: String
})

export const Exam: Model<IExam> = model<IExam>('Exam', examSchema)
