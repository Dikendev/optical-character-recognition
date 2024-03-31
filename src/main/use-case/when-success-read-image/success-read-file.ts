import {
  File,
  FileResponse,
} from '../../../external/ocr/interfaces/file.response.interface';
import {
  FilesResponse,
  WordsCount,
} from './interfaces/read-file-response.interface';
import { ReadFile } from './read-file.interface';

export class SuccessReadFile implements ReadFile {
  constructor(private filesResponses: FileResponse) {}

  findWords(wordsToFind: string[]): FilesResponse {
    return this.filesResponses
      .map<WordsCount>((fileResponse) => {
        const foundWords = this.getWordsFound(wordsToFind, fileResponse);
        return foundWords.length
          ? this.getWordsCount(fileResponse, foundWords)
          : null;
      })
      .filter(Boolean);
  }

  getWordsFound(wordsToFind: string[], fileResponse: File): string[] {
    return wordsToFind.filter((wordToFind) =>
      fileResponse.text.includes(wordToFind),
    );
  }

  getWordsCount(fileResponse: File, foundWords: string[]): WordsCount {
    return { fileName: fileResponse.name, count: foundWords.length };
  }
}
