import { FindWordsResponse } from './success-read-file';

export abstract class ReadFile {
  findWords: (wordsToFind: string[]) => FindWordsResponse;
}
