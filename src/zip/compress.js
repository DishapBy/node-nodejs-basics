import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import zlib from 'zlib';

const compress = async () => {
    // Write your code here
    const folderPath = fileURLToPath(import.meta.url);
    const mainFolder = path.dirname(folderPath);

    const fileOnCompress = mainFolder + '\\files\\fileToCompress.txt';
    const compressedFile = mainFolder + '\\files\\archive.gz';

    const gzip = zlib.createGzip();

    const dataOnCompress = fs.createReadStream(fileOnCompress, { encoding: 'utf8' });
    const dataAfterCompress = fs.createWriteStream(compressedFile);

    dataOnCompress.pipe(gzip).pipe(dataAfterCompress);

    dataOnCompress.on('error', e => console.log(e));
    dataAfterCompress.on('error', e => console.log(e));


};

await compress();