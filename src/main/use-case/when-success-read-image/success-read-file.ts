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

  findWords(searchWords: string[]): FilesResponse {
    return this.filesResponses
      .map<WordsCount>((fileResponse) => {
        const foundWords = this.getWordsFound(searchWords, fileResponse);
        return this.getWordsCount(fileResponse, searchWords, foundWords);
      })
      .filter(Boolean);
  }

  getWordsFound(wordsToFind: string[], fileResponse: File): string[] {
    return wordsToFind.filter((wordToFind) =>
      fileResponse.text.includes(wordToFind),
    );
  }

  getWordsCount(
    fileResponse: File,
    searchWords: string[],
    foundWords: string[],
  ): WordsCount {
    return {
      fileName: fileResponse.name,
      searchWords,
      documentWords: fileResponse.text,
      foundWords,
      count: foundWords.length,
    };
  }
}
