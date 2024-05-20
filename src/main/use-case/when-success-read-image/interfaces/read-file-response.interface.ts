export interface WordsCount {
  documentWords: string;
  searchWords: string[];
  foundWords: string[];
  fileName: string;
  count: number;
}

export type FilesResponse = WordsCount[];
