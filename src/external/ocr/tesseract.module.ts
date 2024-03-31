import { Module } from '@nestjs/common';
import { Tesseract } from './tesseract';

@Module({
  imports: [],
  providers: [Tesseract],
  exports: [Tesseract],
})
export class TesseractModule {}
