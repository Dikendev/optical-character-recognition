import {
  File,
  FileResponse,
} from '../../../../external/ocr/interfaces/file.response.interface';

const file1Mock: File = {
  name: 'file1',
  text: 'word1 word2 word3 word4 word5 word6 word7 word8 word9 word10 word11',
};

const file2Mock: File = {
  name: 'file2',
  text: 'word1 word2 word3 word4 word5 word6 word7 word8 word9 word10',
};

export const fileResponseMock: FileResponse = [file1Mock, file2Mock];
