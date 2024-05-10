import Poppler from 'node-poppler';
import { promises as fsPromises } from 'fs';
import { promisify } from 'util';
import { readFileSync } from 'fs';
import { PoppleOptions } from './interfaces/popple-options.interface';

const unlinkAsync = promisify(fsPromises.unlink);

export class PdfExtract {
  constructor(private readonly poppler = new Poppler()) {}

  async extractData(file: Express.Multer.File) {
    const fileBuffer = file.buffer;
    const fileName = file.originalname;
    const options = this.poppleOptions();

    try {
      await this.poppler.pdfToCairo(fileBuffer, fileName, options);
      const path = `${fileName}-1.png`;
      const buffer = await this.readJsonFile(path);
      unlinkAsync(path);
      return this.setBase64Prefix(buffer);
    } catch (error) {
      console.error('Error extracting PDF:', error);
    }
  }

  poppleOptions(): PoppleOptions {
    return {
      firstPageToConvert: 1,
      lastPageToConvert: 2,
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
}
