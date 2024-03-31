import * as fs from 'fs';
import { promisify } from 'util';
import * as path from 'path';

const writeFileAsync = promisify(fs.writeFile);

export const saveJsonFile = async (fileName: string, data: object) => {
  try {
    const filePath = path.join('./TMP', `${fileName}.json`);
    await writeFileAsync(filePath, JSON.stringify(data));
    console.log('File saved successfully.');
  } catch (error) {
    console.error('Error saving file:', error);
    throw error;
  }
};
