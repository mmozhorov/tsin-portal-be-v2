import { Document, Schema, Model, model, Error } from 'mongoose'

export interface ISftpCredential extends Document {
  host: string
  username: string
  password: string
  type: string
  activate: boolean
}

export const sftpCredentialSchema: Schema = new Schema({
  host: String,
  username: String,
  password: String,
  type: String,
  activate: Boolean,
})

export const SftpCredential: Model<ISftpCredential> = model<ISftpCredential>('SftpCredential', sftpCredentialSchema)
