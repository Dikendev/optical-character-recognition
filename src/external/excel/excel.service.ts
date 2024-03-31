import { Injectable } from '@nestjs/common';
import * as Excel from 'exceljs';
import { SheetRepository } from '../../repository/sheet.repository';
import { XlsxService } from './xlsx-reader';

@Injectable()
export class ExcelService implements SheetRepository {
  constructor(private readonly xlsxService: XlsxService) {}

  async read(file: Buffer): Promise<Excel.Worksheet> {
    return this.xlsxService.read(file, 1);
  }

  save<T>(file: T): Promise<T> {
    throw new Error('Method not implemented.');
  }
}
