import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';


const list = async () => {
    const fullPath = fileURLToPath(import.meta.url);
    const mainFolderPath = path.dirname(fullPath);
    const onReadFolder = mainFolderPath + '\\files';

    if (!fs.existsSync(onReadFolder)) {
        throw new Error('FS operation failed');
    } else {
        const arrFiles = fs.readdirSync(onReadFolder);
        console.log(arrFiles);
    };
};

await list();