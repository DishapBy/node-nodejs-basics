import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const create = async () => {

    const mainPath = fileURLToPath(import.meta.url);
    const filesDirectory = path.dirname(mainPath) + '\\files';
    
    const fileName = filesDirectory + '\\fresh.txt';
    const fileText = 'I am fresh and young';

    if (fs.existsSync(filesDirectory)) {
        if (fs.existsSync(filesDirectory + '\\fresh.txt')) {
            throw new Error('FS operation failed');
        } else {
            const writeStream = fs.createWriteStream(fileName)
            writeStream.write(fileText);
            writeStream.end();
        }
    }
};

await create();