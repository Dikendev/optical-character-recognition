import { Injectable } from '@nestjs/common';
import { PdfRepository } from '../../repository/pdf.repository';

@Injectable()
export class PdfService implements PdfRepository {
  constructor() {}

  async read(file: any): Promise<any> {
    console.log('PdfService read', file);
  }
}
