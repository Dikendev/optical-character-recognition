import { Injectable } from '@nestjs/common';
import { FileResponse, Tesseract } from './external/ocr/tesseract';

@Injectable()
export class AppService {
  constructor(private readonly tesseract: Tesseract) {}

  async recognizeFile(
    files: Array<Express.Multer.File>,
  ): Promise<FileResponse> {
    const result = await this.tesseract.recognizeFilePt(files);
    return result;
  }
}
