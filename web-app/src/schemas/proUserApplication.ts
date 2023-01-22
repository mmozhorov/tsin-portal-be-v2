import { Document, Schema, Model, model } from 'mongoose'

interface IUserApplicationStep {
  name: string,
  data: object,
  finished: boolean,
}

export interface IProUserApplication extends Document {
  userId: string,
  examId: string,
  status: string,
  steps: IUserApplicationStep[]
}

export const ProUserApplicationSchema: Schema = new Schema({
  userId: String,
  examId: String,
  status: String,
  steps: [{
    name: String,
    data: Object,
    finished: Boolean
  }]
})

export const ProUserApplication: Model<IProUserApplication> = model<IProUserApplication>('ProUsersApplications', ProUserApplicationSchema)
