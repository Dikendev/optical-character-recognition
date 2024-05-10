export interface WordsCount {
  documentWords: string;
  fileName: string;
  count: number;
}

export type FilesResponse = WordsCount[];
