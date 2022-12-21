import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Exam {
  @Prop({ required: true })
  id: string;

  @Prop()
  mcqdate: string;

  @Prop()
  mcqtype: string;

  @Prop()
  oscedate: string;

  @Prop()
  oscetype: string;

  @Prop()
  capacity: number;

  @Prop()
  activate: boolean;

  @Prop()
  usersIds: string[];

  @Prop()
  seatsAvailable: number;

  @Prop()
  type: string;
}

export type ExamDocument = Exam & Document;
export const ExamSchema = SchemaFactory.createForClass(Exam);
