import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';


const rename = async () => {
    const fullPath = fileURLToPath(import.meta.url);
    const mainFolderPath = path.dirname(fullPath);
    const filesFolder = mainFolderPath + '\\files';

    console.log(filesFolder + '\\wrongFilename.txt');

    if (!fs.existsSync(filesFolder + '\\wrongFilename.txt') || fs.existsSync(filesFolder + '\\wrongFilename.txt')) {
        throw new Error('FS operation failed');
    } else {
        try {
            fs.renameSync(filesFolder + '\\wrongFilename.txt', filesFolder + '\\properFilename.md');
        } catch (e) {
            throw new Error(e);
        }
    }
};

await rename();