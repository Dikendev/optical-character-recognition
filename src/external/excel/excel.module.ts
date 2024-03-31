import { Module } from '@nestjs/common';
import { ExcelService } from './excel.service';
import { SheetRepository } from '../../repository/sheet.repository';
import { XlsxService } from './xlsx-reader';
import { Workbook } from 'exceljs';

@Module({
  imports: [],
  controllers: [],
  providers: [
    XlsxService,
    Workbook,
    ExcelService,
    { provide: SheetRepository, useExisting: ExcelService },
  ],
  exports: [SheetRepository],
})
export class ExcelModule {}
