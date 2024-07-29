import { createScheduler, createWorker } from 'tesseract.js';
import { FileResponse } from './interfaces/file.response.interface';
import { Injectable } from '@nestjs/common';
import { PdfRepository } from '../../repository/pdf.repository';

const _PORTUGUESE_LANG = 'por';

const _APPLICATION_TYPE = {
  PDF: 'application/pdf',
} as const;

@Injectable()
export class Tesseract {
  private worker: Tesseract.Worker;
  private scheduler: Tesseract.Scheduler;

  constructor(private readonly pdfRepository: PdfRepository) {}

  async initWorker(lang: string) {
    this.scheduler = createScheduler();
    this.worker = await createWorker(lang, 1, { cachePath: '.' });
    this.scheduler.addWorker(this.worker);
  }

  async terminateWorker() {
    if (this.worker) {
      await this.worker.terminate();
    }
  }

  async schedulerTerminate() {
    if (this.scheduler) {
      await this.scheduler.terminate();
    }
  }

  async recognizeFilePt(
    files: Array<Express.Multer.File>,
  ): Promise<FileResponse> {
    try {
      const workers = files.length;
      const resArr = Array(workers);

      for (let i = 0; i < workers; i++) {
        resArr[i] = this.initWorker(_PORTUGUESE_LANG);
      }

      await Promise.all(resArr);
      const resArr2 = Array(files.length);

      for (let i = 0; i < files.length; i++) {
        let newFile: Buffer;

        if (files[i].mimetype === _APPLICATION_TYPE.PDF) {
          const readPdf = await this.pdfRepository.read(files[i]);
          newFile = readPdf.buffer;
        } else {
          newFile = files[i].buffer;
        }

        resArr2[i] = this.scheduler
          .addJob('recognize', newFile)
          .then((result) => {
            const fileName = files[i].originalname;
            const fileText = result.data.text?.toLowerCase();

            if (!fileText || fileText === '') {
              throw new Error('Can not read the document text.');
            }

            return { name: fileName, text: fileText };
          });
      }
      return Promise.all(resArr2);
    } catch (error) {
      console.error('Error in recognize', error);
      throw error;
    } finally {
      this.schedulerTerminate;
    }
  }
}
