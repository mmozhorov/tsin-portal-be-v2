import { ApiBearerAuth, ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Body, Controller, Get, Param, Post, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from "@nestjs/platform-express";

import {BaseError, InternalError, PublicError} from "../../utils/typed-errors";
import { ProService } from './pro.service';
import * as dto from "./pro.dto";

const AWS = require('aws-sdk');
const multerS3 = require('multer-s3');
const multer = require("multer");

require('dotenv').config()

AWS.config.update({
  accessKeyId: process.env.accessKey,
  secretAccessKey:  process.env.secretAccessKey,
  region: 'ca-central-1'
});

const s3 = new AWS.S3();

// const upload = multer({
//   storage: multerS3({
//     s3: s3,
//     bucket: 'touchstone-be',
//     key: function (req: any, file: any, cb: any) {
//       console.log(file);
//       cb(null, new Date().toISOString() + file.originalname);
//     }
//   })
// });

@Controller('pro')
@ApiTags('pro')
export class ProController {
  constructor(private readonly proService: ProService) {}

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
  @UseInterceptors(FileInterceptor('file'))
  @ApiResponse({
    type: dto.UploadProUserDocumentResponse
  })
  async createUserDocument(
    @Body() body: s3.CompleteMultipartUploadOutput
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
