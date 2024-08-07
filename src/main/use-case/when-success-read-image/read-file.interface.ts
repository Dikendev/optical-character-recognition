import { FilesResponse } from './interfaces/read-file-response.interface';

export interface ReadFile {
  findWords: (wordsToFind: string[]) => FilesResponse;
  filterWords: (words: string) => string;
}
