import {Module, NestModule} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProModule } from './pro/pro.module';
import { MongoDB } from './utils/secrets';
import { AuthMiddleware } from "./middlewares/auth.middleware";

@Module({
  imports: [MongooseModule.forRoot(MongoDB), ProModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer) {
    consumer.apply(AuthMiddleware).forRoutes("/")
  }
}
