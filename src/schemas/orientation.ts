import { Schema } from 'mongoose';

export const orientationSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  type: String,
  date: String,
  registrations: Number,
  activate: Boolean
})