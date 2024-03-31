import { createWorker } from 'tesseract.js';
import { FileResponse } from './interfaces/file.response.interface';

export class Tesseract {
  private worker: Tesseract.Worker;

  async initWorker(lang: string) {
    this.worker = await createWorker(lang);
  }

  async terminateWorker() {
    if (this.worker) {
      await this.worker.terminate();
    }
  }

  async recognizeFilePt(
    files: Array<Express.Multer.File>,
  ): Promise<FileResponse> {
    try {
      await this.initWorker('por');
      const response: FileResponse = [];

      for (const file of files) {
        const {
          data: { text },
        } = await this.worker.recognize(file.buffer);
        const fileName = file.originalname;
        const fileText = text.toLowerCase();
        response.push({ name: fileName, text: fileText });
      }
      return response;
    } catch (error) {
      console.error('Error in recognize', error);
      throw error;
    } finally {
      await this.terminateWorker();
    }
  }
}
