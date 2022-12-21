import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class ComSim {
  @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  type: string;

  @Prop({ required: true })
  activate: boolean;

  @Prop({ required: true })
  registrations: number;

  @Prop({ required: true })
  startDate: string;

  @Prop({ required: true })
  endDate: string;

  @Prop({ required: true })
  startTime: string;

  @Prop({ required: true })
  endTime: string;
}

export type ComSimDocument = ComSim & Document;
export const ComSimSchema = SchemaFactory.createForClass(ComSim);
