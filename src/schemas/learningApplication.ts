import { Schema } from 'mongoose';

export const learningApplicationSchema = new Schema({
  associatedMedicalSchool: String,
  postgraduateTrainingProgram: String,
  PGYLevel: String,
  PEAPStartDate: String,
  PEAPEndDate: String,
  familyMedicine: Boolean,
  orientationId: String,
  learningId: String,
  photo: String,
  registrationFee: Number,
  administrativeFee: Number,
  adminAssigned: {
    type:  String,
    default: null
  },
  userId: String,
  paid: Boolean,
  status: String,
  type: String,
})