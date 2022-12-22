import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
// import { ProExam, ProExamSchema } from '../schemas/pro-exam.schema';
import { ProExam, ProExamSchema } from '../../schemas/proExam'
import { ProUserApplication, ProUserApplicationSchema } from '../../schemas/proUserApplication';
import { ProController } from './pro.controller';
import { ProService } from './pro.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'ProExam', schema: ProExamSchema },
      { name: 'ProUserApplication', schema: ProUserApplicationSchema }
    ])
  ],
  controllers: [ProController],
  providers: [ProService],
})
export class ProModule {}
