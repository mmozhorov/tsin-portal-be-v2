import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProService } from './pro.service';

@Controller('pro')
export class ProController {
  constructor(private readonly proService: ProService) {}

  @Get('/user/exams')
  async getProExams(): Promise<any[]> {
    return await this.proService.getProExams();
  }
}
