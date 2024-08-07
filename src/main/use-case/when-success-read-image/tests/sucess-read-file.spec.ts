import { FilesResponse } from '../interfaces/read-file-response.interface';
import { SuccessReadFile } from '../success-read-file';
import { file3Mock, fileResponseMock } from './files-mock';

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

    console.log('result', result);
    const expected: FilesResponse = [
      {
        fileName: 'file1',
        searchWords: ['word11'],
        documentWords:
          'word1 word2 word3 word4 word5 word6 word7 word8 word9 word10 word11',
        foundWords: ['word11'],
        count: 1,
      },
      {
        fileName: 'file2',
        searchWords: ['word11'],
        documentWords:
          'word1 word2 word3 word4 word5 word6 word7 word8 word9 word10',
        foundWords: [],
        count: 0,
      },
    ];
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

  describe('filterWords method', () => {
    it('should log the words to filter', () => {
      const readFile = new SuccessReadFile(file3Mock);

      const wordsFound = readFile.findWords(['vencimento', 'total']);

      const filteredData = readFile.filterWords(wordsFound[0].documentWords);
      console.log('filteredData', filteredData);
    });
  });
});
