export const Status = {
  APPROVED: 'approved',
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
