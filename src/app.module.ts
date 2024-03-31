import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExcelModule } from './external/excel/excel.module';
import { SuccessReadFileModule } from './main/use-case/when-success-read-image/success-read-file.module';
import { TesseractModule } from './external/ocr/tesseract.module';

@Module({
  imports: [ExcelModule, SuccessReadFileModule, TesseractModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
