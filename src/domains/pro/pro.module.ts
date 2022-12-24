import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { ProExam, ProExamSchema } from '../../schemas/proExam'
import { ProUserApplication, ProUserApplicationSchema } from '../../schemas/proUserApplication';
import { ProController } from './pro.controller';
import { ProService } from './pro.service';
import { FileUploaderMiddleware } from "../../middlewares/file-uploader.middleware";
import {User, userSchema} from "../../schemas/user";
import {guestSchema} from "../../schemas/guest";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'ProExam', schema: ProExamSchema },
      { name: 'ProUserApplication', schema: ProUserApplicationSchema },
      { name: 'User', schema: userSchema },
      { name: 'Guest', schema: guestSchema },
    ])
  ],
  controllers: [ProController],
  providers: [ProService],
})
export class ProModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(FileUploaderMiddleware)
      .forRoutes({ path: 'pro/user/application/document', method: RequestMethod.POST });
  }
}
