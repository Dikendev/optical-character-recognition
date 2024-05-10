import { Module } from '@nestjs/common';
import { Tesseract } from './tesseract';
import { PdfModule } from '../pdf/pdf.module';

@Module({
  imports: [PdfModule],
  providers: [Tesseract],
  exports: [Tesseract],
})
export class TesseractModule {}
