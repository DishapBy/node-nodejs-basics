import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const read = async () => {
    // Write your code here
    const folderPath = fileURLToPath(import.meta.url);
    const mainFolder = path.dirname(folderPath);
    const fileOnRead = mainFolder + '\\files\\fileToRead.txt';

    const stream = fs.createReadStream(fileOnRead);
    stream.on('data', data => {
        process.stdout.write(data);
    });

    stream.on('error', e => process.stdout.write(e));

};

await read();