import { Injectable, Logger } from '@nestjs/common';
import { Tesseract } from './external/ocr/tesseract';
import { WordsIsFound } from './main/use-case/when-words-is-found/words-is-found';
import { SuccessReadFile } from './main/use-case/when-success-read-image/success-read-file';
import { CandidateStatusList } from './main/use-case/when-words-is-found/interfaces/candidate-status.interface';
import { OcrDto } from './app.controller';
import { Puppeteer } from './external/puppeteer/puppeteer';

@Injectable()
export class AppService {
  constructor(
    private readonly tesseract: Tesseract,
    private readonly logger: Logger,
  ) {}

  async recognizeFile(
    files: Array<Express.Multer.File>,
    wordsToFind: OcrDto,
  ): Promise<CandidateStatusList> {
    try {
      const result = await this.tesseract.recognizeFilePt(files);
      const readFile = new SuccessReadFile(result);
      const fileResponse = readFile.findWords(wordsToFind.wordsToFind);
      const wordsIsFound = new WordsIsFound(
        fileResponse,
        wordsToFind.wordsToFind.length,
      );
      const candidateStatus = wordsIsFound.candidateStatus();

      return candidateStatus;
    } catch (error) {
      console.error('Error recognizing file:', error);
      return error;
    }
  }

  async navigate() {
    const puppeteer = new Puppeteer(this.logger);
    await puppeteer.init();
    const url = process.env.SITE_SCRAPE_TARGET;
    await puppeteer.navigate(url);
  }
}
