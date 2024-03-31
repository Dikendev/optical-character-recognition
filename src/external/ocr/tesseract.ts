import { createScheduler, createWorker } from 'tesseract.js';
import { FileResponse } from './interfaces/file.response.interface';

export class Tesseract {
  private worker: Tesseract.Worker;
  private scheduler: Tesseract.Scheduler;

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
      const workerN = files.length;
      const resArr = Array(workerN);

      for (let i = 0; i < workerN; i++) {
        resArr[i] = this.initWorker('por');
      }

      await Promise.all(resArr);
      const resArr2 = Array(files.length);

      for (let i = 0; i < files.length; i++) {
        resArr2[i] = this.scheduler
          .addJob('recognize', files[i].buffer)
          .then((result) => {
            const fileName = files[i].originalname;
            const fileText = result.data.text.toLowerCase();
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
