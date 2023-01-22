import { ApiBearerAuth, ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import {BaseError, InternalError, PublicError} from "../../utils/typed-errors";
import { ProService } from './pro.service';
import * as dto from "./pro.dto";


@Controller('/api/pro')
@ApiTags('pro')
export class ProController {
  constructor(private readonly proService: ProService) {}
  @Post('/user/account')
  @ApiOperation({ description: 'Create Account' })
  @ApiResponse({
    type: dto.CreateUserAccountResponse
  })
  async createAccount(
    @Body() body: dto.CreateUserAccountRequest
  ): Promise<dto.CreateUserAccountResponse | PublicError> {
    const data = await  this.proService.createAccount(body);
    if (data instanceof BaseError) {
      return new PublicError(data.message, data.statusCode, data.type)
    }
    return { data }
  }

  @Get('/user/exams')
  @ApiOperation({ description: 'Get all PRO exams' })
  @ApiBearerAuth()
  @ApiResponse({
    type: dto.GetProExamsResponse
  })
  async getProExams(): Promise<dto.GetProExamsResponse> {
    const exams = await this.proService.getProExams();
    return { data: exams };
  }

  @Get('/user/applications/:userId')
  @ApiOperation({ description: 'Get All Applications ( with exam info ) for User' })
  @ApiBearerAuth()
  @ApiResponse({
    type: dto.GetAllProUserApplications
  })
  async getApplicationsForUser(
    @Param('userId') userId: string
  ): Promise<dto.GetAllProUserApplications | PublicError> {
    const data = await  this.proService.getProUserApplications(userId);
    if (data instanceof BaseError) {
      return new PublicError(data.message, data.statusCode, data.type)
    }
    return { data }
  }

  @Post('/user/application')
  @ApiOperation({ description: 'Create or Update application and return user application' })
  @ApiBearerAuth()
  @ApiResponse({
    type: dto.CreateProUserApplication
  })
  async createUserApplication(
    @Body() body: dto.CreateProUserApplicationRequest
  ): Promise<dto.CreateProUserApplication | PublicError> {
    const data = await  this.proService.createUserApplication(body);
    if (data instanceof BaseError) {
      return new PublicError(data.message, data.statusCode, data.type)
    }
    return { data }
  }

  @Post('/user/application/document')
  @ApiOperation({ description: 'Upload user document for PRO User Application Steps' })
  @ApiBearerAuth()
  @ApiResponse({
    type: dto.UploadProUserDocumentResponse
  })
  async createUserDocument(
    @Body() body: { file: { Location?: string }}
  ): Promise<dto.UploadProUserDocumentResponse | InternalError> {
    const { file } = body;
    if (!file?.Location) {
      return new InternalError('Something went wrong');
    }
    return { data: file.Location };
  }

  @Post('/admin/exam')
  @ApiOperation({ description: 'Create PRO Exam from admin side' })
  @ApiBearerAuth()
  @ApiResponse({
    type: dto.CreateProExamResponse
  })
  async createProExam(
    @Body() body: dto.CreateProExamRequest
  ): Promise<dto.CreateProExamResponse | PublicError> {
    const data = await this.proService.createProExam(body);
    if (data instanceof BaseError) {
      return new PublicError(data.message, data.statusCode, data.type)
    }
    return { data };
  }
}
