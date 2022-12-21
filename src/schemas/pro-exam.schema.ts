import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class ProExam extends Document {
  @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  fee: string;

  @Prop({ required: true })
  year: string;

  @Prop({ required: true })
  status: string;

  @Prop({ required: true })
  userIds: string[]
}

export const ProExamSchema = SchemaFactory.createForClass(ProExam);
