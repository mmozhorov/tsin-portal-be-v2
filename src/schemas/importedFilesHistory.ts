import { Document, Schema, Model, model, Error } from 'mongoose'

export interface IImportedFilesHistory extends Document {
  type: string
  fileName: string
  records: number
  success: Object[]
  fail: Object[]
  date: string
}

export const importedFilesHistorySchema: Schema = new Schema({
  type: String,
  fileName: String,
  records: Number,
  success: [Object],
  fail: [Object],
  date: String
})

export const ImportedFilesHistory: Model<IImportedFilesHistory> = model<IImportedFilesHistory>('ImportedFilesHistory', importedFilesHistorySchema)
