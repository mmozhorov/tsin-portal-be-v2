import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProModule } from './domains/pro/pro.module';
import { MongoDB } from './utils/secrets';

@Module({
  imports: [MongooseModule.forRoot(MongoDB), ProModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
