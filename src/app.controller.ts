import {
  Controller,
  Post,
  Query,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { SheetRepository } from './repository/sheet.repository';
import { IsArray, IsString } from 'class-validator';
import { Transform } from 'class-transformer';
import { PdfRepository } from './repository/pdf.repository';
import { CandidateStatusList } from './main/use-case/when-words-is-found/interfaces/candidate-status.interface';

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
    private readonly pdfRepository: PdfRepository,
  ) {}

  @Post('upload-pdf')
  @UseInterceptors(FileInterceptor('file'))
  async pdf(@UploadedFile() file: Express.Multer.File) {
    return await this.pdfRepository.read(file);
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
