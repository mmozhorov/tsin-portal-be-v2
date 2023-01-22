import { Schema } from 'mongoose';

export const learningGroupSchema = new Schema({
  type: String,
  registrationFee: Number,
  administrativeFee: Number,
})