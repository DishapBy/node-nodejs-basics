import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';


const remove = async () => {
    const fullPath = fileURLToPath(import.meta.url);
    const mainFolderPath = path.dirname(fullPath);
    const fileToRemove = mainFolderPath + '\\files\\fileToRemove.txt';

    if (!fs.existsSync(fileToRemove)) {
        throw new Error('FS operation failed');
    } else {
        fs.unlink(fileToRemove, err => {
            if (err) throw err;
        })
    };
};

await remove();