import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

interface IUserApplicationStep {
  name: string,
  data: object,
  finished: boolean,
}

@Schema()
export class ProUserApplication {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  examId: string;

  @Prop({ required: true })
  status: string;

  @Prop({ required: true })
  steps: IUserApplicationStep[]
}

export type ProUserApplicationDocument = ProUserApplication & Document;
export const ProUserApplicationSchema = SchemaFactory.createForClass(ProUserApplication);
