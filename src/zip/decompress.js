import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import zlib from 'zlib';

const decompress = async () => {
    // Write your code here 

    const folderPath = fileURLToPath(import.meta.url);
    const mainFolder = path.dirname(folderPath);

    const fileOnUncompress  = mainFolder + '\\files\\archive.gz';
    const decompressedFile = mainFolder + '\\files\\fileToCompress.txt';

    const gzip = zlib.createGunzip();

    const dataOnCompress = fs.createReadStream(fileOnUncompress);
    const dataAfterCompress = fs.createWriteStream(decompressedFile);

    dataOnCompress.pipe(gzip).pipe(dataAfterCompress);

    dataOnCompress.on('error', e => console.log(e));
    dataAfterCompress.on('error', e => console.log(e));

};

await decompress();