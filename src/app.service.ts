import { Injectable } from '@nestjs/common';
import { Tesseract } from './external/ocr/tesseract';
import {
  CandidateStatusList,
  WordsIsFound,
} from './main/use-case/when-words-is-found/words-is-found';
import { SuccessReadFile } from './main/use-case/when-success-read-image/success-read-file';
import { OcrQueryDto } from './app.controller';

@Injectable()
export class AppService {
  constructor(private readonly tesseract: Tesseract) {}

  async recognizeFile(
    files: Array<Express.Multer.File>,
    wordsToFind: OcrQueryDto,
  ): Promise<CandidateStatusList> {
    const result = await this.tesseract.recognizeFilePt(files);
    const readFile = new SuccessReadFile(result);
    const fileResponse = readFile.findWords(wordsToFind.wordsToFind);
    const wordsIsFound = new WordsIsFound(
      fileResponse,
      wordsToFind.wordsToFind.length,
    );
    const candidateStatus = wordsIsFound.candidateStatus();

    return candidateStatus;
  }
}
