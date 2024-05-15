import {
  Body,
  Controller,
  Get,
  Post,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { SheetRepository } from './repository/sheet.repository';
import { IsString } from 'class-validator';
import { Transform } from 'class-transformer';
import { CandidateStatusList } from './main/use-case/when-words-is-found/interfaces/candidate-status.interface';

export class OcrDto {
  @Transform(({ value }) => JSON.parse(value))
  @IsString({ each: true })
  wordsToFind: string[];
}

@Controller('ocr')
export class AppController {
  constructor(
    private readonly sheetRepository: SheetRepository,
    private readonly appService: AppService,
  ) {}

  @Post('upload-sheet')
  @UseInterceptors(FileInterceptor('file'))
  async csv(@UploadedFile() file: Express.Multer.File) {
    return this.sheetRepository.read(file.buffer);
  }

  @Post('recognize-words')
  @UseInterceptors(FilesInterceptor('files'))
  async ocr(
    @UploadedFiles() files: Array<Express.Multer.File>,
    @Body() wordsToFind: OcrDto,
  ): Promise<CandidateStatusList> {
    return this.appService.recognizeFile(files, wordsToFind);
  }

  @Get('health')
  health() {
    return {
      status: 'UP',
    };
  }
}
