import { FilesResponse } from '../interfaces/read-file-response.interface';
import { SuccessReadFile } from '../success-read-file';
import { fileResponseMock } from './files-mock';

describe('SuccessReadFile', () => {
  const filesMock = fileResponseMock;

  it('should return a list of words found in the text', () => {
    const wordsToFind = ['word1'];
    const readFile = new SuccessReadFile(filesMock);
    const result = readFile.findWords(wordsToFind);
    expect(result).toEqual([
      { fileName: 'file1', count: 1 },
      { fileName: 'file2', count: 1 },
    ]);
  });

  it('should return an empty list when no words are found', () => {
    const wordsToFind = ['word666'];
    const readFile = new SuccessReadFile(filesMock);
    const result = readFile.findWords(wordsToFind);
    expect(result).toEqual([]);
  });

  it('should return a only one response  when the word is found in only one file', () => {
    const wordsToFind = ['word11'];
    const readFile = new SuccessReadFile(filesMock);
    const result = readFile.findWords(wordsToFind);
    const expected: FilesResponse = [{ fileName: 'file1', count: 1 }];
    expect(result).toEqual(expected);
  });

  describe('wordsFound method', () => {
    const filesMock = fileResponseMock;

    it('should return a list of words found in the string array', () => {
      const wordsToFind = ['word1', 'word2'];
      const readFile = new SuccessReadFile(filesMock);
      const wordsFound = readFile.getWordsFound(wordsToFind, filesMock[0]);
      expect(wordsFound).toEqual(['word1', 'word2']);
    });
  });
});
