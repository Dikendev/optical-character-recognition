import { PdfRepository } from '../../repository/pdf.repository';
import { PoppleOptions } from './interfaces/popple-options.interface';
import { promises as fsPromises } from 'fs';
import { promisify } from 'util';
import { readFileSync } from 'fs';
import Poppler from 'node-poppler';

const unlinkAsync = promisify(fsPromises.unlink);

export class PdfService implements PdfRepository {
  constructor() {}

  async read(file: Express.Multer.File): Promise<Express.Multer.File> {
    const poppler = new Poppler();
    const fileBuffer = file.buffer;
    const fileName = file.originalname;
    const options = this.poppleOptions();

    try {
      await poppler.pdfToCairo(fileBuffer, fileName, options);
      const path = `${fileName}-1.png`;
      const buffer = await this.readJsonFile(path);
      unlinkAsync(path);
      return this.asFile(file, buffer);
      // return this.setBase64Prefix(buffer);
    } catch (error) {
      console.error('Error extracting PDF:', error);
    }
  }

  asFile = (
    file: Express.Multer.File,
    newBuffer: string,
  ): Express.Multer.File => {
    const newMimetype = 'image/png';
    return {
      ...file,
      buffer: Buffer.from(newBuffer, 'base64'),
      originalname: file.originalname,
      mimetype: newMimetype,
      size: file.size,
      fieldname: file.fieldname,
    };
  };

  poppleOptions(): PoppleOptions {
    return {
      firstPageToConvert: 1,
      lastPageToConvert: 1,
      pngFile: true,
    };
  }

  setBase64Prefix = (data: string): string => {
    return `data:image/png;base64,${data}`;
  };

  readJsonFile = async (path: string): Promise<string> => {
    try {
      return readFileSync(path, 'base64');
    } catch (err) {
      console.log('Error reading file:', err);
    }
  };

  typeOfFile = (file: Express.Multer.File): string => {
    return file.mimetype;
  };
}
