import { Document, Schema, Model, model, Error } from 'mongoose'
const bcrypt = require('bcryptjs');

export interface IUser extends Document {
  username: string,
  avatar: string,
  password: string
  email: string
  phone: string
  firstName: string,
  lastName: string,
  gender: string,
  dateOfBirth: string,
  legalStatus: string,
  countryOfBirth: string,
  motherTongue: string,
  streetAdress: string,
  streetAdressOpt: string,
  unitNumber: string,
  country: string,
  state: string,
  city: string,
  zipCode: string,
  emergencyName: string,
  emergencyRelationship: string,
  emergencyPhone: string,
  emergencyEmail: string,
  univer: string,
  degreeProgrammArea: string,
  degreeAchived: string,
  degreeProgramm: string,
  educationCountry: string,
  yearsOfPractice: string,
  educationLang: string,
  practiceLang: string,
  role: string,
  cnoNumber: string,
  learnerNumber: string,
  learnerType: string,
  examType: string,
  cnoDate: string,
  uploadDate: string,
  status: string,
  sponsored: string
}

export const userSchema: Schema = new Schema({
  username: String,
  avatar: String,
  password: String,
  email: String,
  phone: String,
  firstName: String,
  lastName: String,
  gender: String,
  dateOfBirth: String,
  legalStatus: String,
  countryOfBirth: String,
  motherTongue: String,
  streetAdress: String,
  streetAdressOpt: String,
  unitNumber: String,
  country: String,
  state: String,
  city: String,
  zipCode: String,
  emergencyName: String,
  emergencyRelationship: String,
  emergencyPhone: String,
  emergencyEmail: String,
  univer: String,
  degreeProgrammArea: String,
  degreeAchived: String,
  degreeProgramm: String,
  educationCountry: String,
  yearsOfPractice: String,
  educationLang: String,
  practiceLang: String,
  role: String,
  cnoNumber: String,
  learnerNumber: String,
  learnerType: String,
  examType: String,
  cnoDate: String,
  uploadDate: String,
  status: String,
  sponsored: String
})

userSchema.pre<IUser>('save', function save(next) {
  const user = this;
  try {
    console.log(bcrypt);
    bcrypt.hash(this.password, 10, (err: Error | undefined, hash: string) => {
      if (err) {
        return next(err)
      }
      user.password = hash
      next()
    })
  } catch (error) {
    console.log('ererer', error)
  }
})

userSchema.methods.comparePassword = function (candidatePassword: string, callback: any) {
  const user = this as IUser
  bcrypt.compare(candidatePassword, user.password, (err: Error | undefined, isMatch: boolean) => {
    console.log({ err, isMatch})
    callback(err, isMatch)
  })
}

export const User: Model<IUser> = model<IUser>('User', userSchema)
