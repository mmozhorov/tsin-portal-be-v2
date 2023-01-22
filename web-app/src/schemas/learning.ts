import { Schema } from 'mongoose';
export const learningSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  foundationStartDate: String,
  foundationEndDate: String,
  advancedStartDate: String,
  advancedEndDate: String,
  registrations: Number,
  capacity: Number,
  activate: Boolean,
  status: String,
  type: String,
  usersIds: [String],
})