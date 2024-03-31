import { FilesResponse } from '../when-success-read-image/interfaces/read-file-response.interface';

export const Status = {
  SUCCESS: 'success',
  REJECTED: 'rejected',
  REPROVED: 'reproved',
} as const;

export type Status = (typeof Status)[keyof typeof Status];

export interface CandidateStatus {
  fileName: string;
  wordsCount: number;
  percent: number;
  status: Status;
}

export type CandidateStatusList = CandidateStatus[];

export const REJECTED_THRESHOLD = 10;
export const REPROVED_THRESHOLD = 80;

export class WordsIsFound {
  constructor(
    private readonly wordsResponse: FilesResponse,
    private readonly totalWordsSize: number,
  ) {}

  candidateStatus(): CandidateStatusList {
    if (!this.isFilesResponseValid()) {
      throw new Error('Invalid files response');
    }

    return this.wordsResponse.map<CandidateStatus>((file) => {
      const fileName = file.fileName;
      const wordsCount = file.count;
      const percent = this.percent(wordsCount);
      const status = this.checkStatus(percent);

      return {
        fileName,
        wordsCount,
        percent,
        status,
      };
    });
  }

  isFilesResponseValid(): boolean {
    return this.wordsResponse.length > 0;
  }

  checkStatus(percent: number): Status {
    if (percent < REJECTED_THRESHOLD) {
      return Status.REJECTED;
    }

    if (percent >= REJECTED_THRESHOLD && percent < REPROVED_THRESHOLD) {
      return Status.REPROVED;
    }

    return Status.SUCCESS;
  }

  percent(wordsCount: number): number {
    return (wordsCount / this.totalWordsSize) * 100;
  }
}
