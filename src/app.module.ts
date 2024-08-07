import { Logger, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExcelModule } from './external/excel/excel.module';
import { SuccessReadFileModule } from './main/use-case/when-success-read-image/success-read-file.module';
import { TesseractModule } from './external/ocr/tesseract.module';
import { PdfModule } from './external/pdf/pdf.module';

@Module({
  imports: [ExcelModule, SuccessReadFileModule, TesseractModule, PdfModule],
  controllers: [AppController],
  providers: [AppService, Logger],
})
export class AppModule {}
