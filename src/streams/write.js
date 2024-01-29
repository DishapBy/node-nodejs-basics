import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const write = async () => {
    // Write your code here
    const folderPath = fileURLToPath(import.meta.url);
    const mainFolder = path.dirname(folderPath);
    const fileOnRead = mainFolder + '\\files\\fileToWrite.txt';
    
    process.stdin.on('data', data => {
        fs.writeFile(fileOnRead, data, err => {
            console.log(err);
        });
    });
};

await write();