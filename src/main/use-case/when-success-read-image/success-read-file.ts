import { FileResponse } from '../../../external/ocr/tesseract';
import { ReadFile } from './read-file.interface';

export interface WordsCount {
  fileName: string;
  count: number;
}

export type FindWordsResponse = WordsCount[];

export class SuccessReadFile implements ReadFile {
  constructor(private text: FileResponse) {}

  findWords(wordsToFind: string[]): FindWordsResponse {
    const response: FindWordsResponse = [];
    for (const word of this.text) {
      const words = wordsToFind.filter((word) =>
        this.text.forEach((item) => item.text.includes(word)),
      );
      response.push({ fileName: word.name, count: words.length });
    }
    return response;
  }
}
