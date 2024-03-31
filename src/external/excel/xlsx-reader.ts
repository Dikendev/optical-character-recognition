import { Injectable } from '@nestjs/common';
import * as Excel from 'exceljs';

@Injectable()
export class XlsxService {
  constructor(private readonly excel: Excel.Workbook) {}

  async read(file: Buffer, workSheetFile: number): Promise<Excel.Worksheet> {
    const result = await this.excel.xlsx.load(file);
    return result.getWorksheet(workSheetFile);
  }
}
