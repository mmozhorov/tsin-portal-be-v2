import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { IsImageFile } from "../../utils/validators";
import { ApiProperty } from "@nestjs/swagger";

class ProExam {
  @ApiProperty()
  public id: string;

  @ApiProperty()
  public name: string;

  @ApiProperty()
  public fee: string;

  @ApiProperty()
  public year: string;

  @ApiProperty()
  public status: string;

  @ApiProperty()
  public usersIds: string[];
}
class ProUserApplicationStep {
  @ApiProperty()
  public name: string;

  @ApiProperty()
  public data: object;

  @ApiProperty()
  public finished: boolean;
}
class ProUserApplication {
  @ApiProperty()
  public userId: string;

  @ApiProperty()
  public examId: string;

  @ApiProperty()
  public status: string;

  @ApiProperty()
  public steps: ProUserApplicationStep[]
}

export class CreateProUserApplicationRequest {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  public userId: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  public examId: string;

  @IsOptional()
  @IsArray()
  @ApiProperty()
  public steps: ProUserApplicationStep[]
}
export class CreateProExamRequest {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  public name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  public fee: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  public year: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty()
  public status: string;
}
export class UploadProUserDocumentRequest {
  @IsImageFile()
  @IsNotEmpty()
  @ApiProperty()
  public file: File;
}

export class CreateProExamResponse {
  public data: ProExam
}
export class GetProExamsResponse {
  public data: ProExam[]
}
export class GetAllProUserApplications {
  public data: Partial<ProUserApplication & { exam: ProExam }>[]
}
export class CreateProUserApplication {
  public data: Partial<ProUserApplication>;
}
export class UploadProUserDocumentResponse {
  public data: string;
}
