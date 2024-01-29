import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';


const copy = async () => {
    const folderPath = fileURLToPath(import.meta.url);
    const mainFolder = path.dirname(folderPath);

    const folderOnCopy = mainFolder + '\\files';
    const newFolderName = mainFolder + '\\files_copy';

    if (fs.existsSync(newFolderName)) {
        throw new Error('FS operation failed');
    } else {
        //create folder
        fs.mkdirSync(newFolderName);
        fs.readdir(folderOnCopy, (err, data) => {
            if (err) {
                throw new Error('FS error');
            } else {
                data.forEach(item => {
                    //copy file
                    fs.copyFileSync(folderOnCopy + '\\' + item, newFolderName + '\\' + item);
                });
            };
        });
    }
};

await copy();
