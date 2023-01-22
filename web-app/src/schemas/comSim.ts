import { Document, Schema, Model, model } from 'mongoose'

export interface IComSim extends Document {
  id: string,
  type: string,
  activate: boolean,
  registrations: number,
  startDate: string,
  endDate: string,
  startTime: string,
  endTime: string,
}

export const comSimSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  type: String,
  activate: Boolean,
  registrations: Number,
  startDate: String,
  endDate: String,
  startTime: String,
  endTime: String,
})

export const ComSim: Model<IComSim> = model<IComSim>('ComSim', comSimSchema)
