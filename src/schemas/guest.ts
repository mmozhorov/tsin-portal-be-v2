import { Document, Schema, Model, model, Error } from 'mongoose'

export interface IGuest extends Document {
  email: string
  phone: string
  firstName: string,
  lastName: string,
  cnoNumber: string,
  learnerNumber: string,
  cnoDate: string,
  uploadDate: string,
  code: string,
  learnerType: string,
  examType: string,
  sponsored: string
}

export const guestSchema: Schema = new Schema({
  email: String,
  phone: String,
  firstName: String,
  lastName: String,
  cnoNumber: String,
  learnerNumber: String,
  uploadDate: String,
  code: String,
  cnoDate: String,
  learnerType: String,
  examType: String,
  sponsored: String
})

export const Guest: Model<IGuest> = model<IGuest>('Guest', guestSchema)
