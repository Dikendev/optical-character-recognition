import { Module } from '@nestjs/common';
import { PdfService } from './pdf.service';
import { PdfRepository } from '../../repository/pdf.repository';

@Module({
  imports: [],
  providers: [PdfService, { provide: PdfRepository, useClass: PdfService }],
  exports: [PdfRepository],
})
export class PdfModule {}
