import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const read = async () => {
    const fullPath = fileURLToPath(import.meta.url);
    const mainFolderPath = path.dirname(fullPath);
    const fileToRead = mainFolderPath + '\\files\\fileToRead.txt'

    if (!fs.existsSync(fileToRead)) {
        throw new Error('FS operation failed');
    } else {
        try {
            const data = fs.readFileSync(fileToRead, 'utf-8');
            console.log(data);
        } catch (e) {
            console.log(e);
        }
    }
};

await read();