import {
  Controller,
  Post,
  Query,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { pdfToText } from 'pdf-ts';
import { SheetRepository } from './repository/sheet.repository';
import { CandidateStatusList } from './main/use-case/when-words-is-found/words-is-found';
import { IsArray, IsString } from 'class-validator';
import { Transform } from 'class-transformer';

export class OcrQueryDto {
  @IsArray()
  @Transform(({ value }) => JSON.parse(value), { toClassOnly: true })
  @IsString({ each: true })
  wordsToFind: string[];
}

@Controller()
export class AppController {
  constructor(
    private readonly sheetRepository: SheetRepository,
    private readonly appService: AppService,
  ) {}

  @Post('upload-pdf')
  @UseInterceptors(FileInterceptor('file'))
  async pdf(@UploadedFile() file: Express.Multer.File) {
    return pdfToText(file.buffer);
  }

  @Post('upload-sheet')
  @UseInterceptors(FileInterceptor('file'))
  async csv(@UploadedFile() file: Express.Multer.File) {
    return this.sheetRepository.read(file.buffer);
  }

  @Post('ocr')
  @UseInterceptors(FilesInterceptor('files'))
  async ocr(
    @UploadedFiles() files: Array<Express.Multer.File>,
    @Query() wordsToFind: OcrQueryDto,
  ): Promise<CandidateStatusList> {
    return this.appService.recognizeFile(files, wordsToFind);
  }
}
