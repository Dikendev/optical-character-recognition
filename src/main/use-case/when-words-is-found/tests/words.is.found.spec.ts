import { FilesResponse } from '../../when-success-read-image/interfaces/read-file-response.interface';
import { WordsIsFound } from '../words-is-found';

describe('WordsIsFound', () => {
  it('should return true when files response ', () => {
    const filesResponse: FilesResponse = [{ fileName: 'file1.txt', count: 2 }];
    const totalWordsSize = 10;
    const wordsIsFound = new WordsIsFound(filesResponse, totalWordsSize);
    const isFilesValid = wordsIsFound.isFilesResponseValid();
    expect(isFilesValid).toBeTruthy();
  });

  it('should return false when files response is empty ', () => {
    const filesResponse: FilesResponse = [];
    const totalWordsSize = 10;
    const wordsIsFound = new WordsIsFound(filesResponse, totalWordsSize);
    const isFilesValid = wordsIsFound.isFilesResponseValid();
    expect(isFilesValid).toBeFalsy();
  });

  it('should return success when percent is greater then 80', () => {
    const filesResponse: FilesResponse = [{ fileName: 'file1.txt', count: 9 }];
    const totalWordsSize = 10;
    const wordsIsFound = new WordsIsFound(filesResponse, totalWordsSize);
    const candidateStatusList = wordsIsFound.candidateStatus();
    expect(candidateStatusList[0].status).toBe('success');
  });
});
