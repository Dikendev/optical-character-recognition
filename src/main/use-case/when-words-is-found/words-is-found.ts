import { FilesResponse } from '../when-success-read-image/interfaces/read-file-response.interface';
import {
  CandidateStatusList,
  CandidateStatus,
  Status,
} from './interfaces/candidate-status.interface';

export const REJECTED_THRESHOLD = 10;
export const REPROVED_THRESHOLD = 80;

export class WordsIsFound {
  constructor(
    private readonly wordsResponse: FilesResponse,
    private readonly totalWordsSize: number,
  ) {}

  candidateStatus(): CandidateStatusList {
    return this.wordsResponse.map<CandidateStatus>((file) => {
      const documentWords = file.documentWords.split(' ');
      const fileName = file.fileName;
      const wordsCount = file.count;
      const percent = this.percent(wordsCount);
      const status = this.checkStatus(percent);

      return {
        documentWords,
        fileName,
        searchWords: file.searchWords,
        foundWords: file.foundWords,
        wordsCount,
        percent,
        status,
      };
    });
  }

  checkStatus(percent: number): Status {
    if (percent < REJECTED_THRESHOLD) {
      return Status.REJECTED;
    }

    if (percent >= REJECTED_THRESHOLD && percent < REPROVED_THRESHOLD) {
      return Status.REPROVED;
    }

    return Status.APPROVED;
  }

  percent(wordsCount: number): number {
    return (wordsCount / this.totalWordsSize) * 100;
  }
}
