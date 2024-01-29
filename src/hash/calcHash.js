import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import crypto from 'crypto';


const calculateHash = async () => {
    // Write your code here
    const folderPath = fileURLToPath(import.meta.url);
    const mainFolder = path.dirname(folderPath);
    const fileOnHash = mainFolder + '\\files\\fileToCalculateHashFor.txt';

    const stream = fs.createReadStream(fileOnHash);
    const cryptHash = crypto.createHash('sha256');

    stream.on('data', (data) => {
        cryptHash.update(data);
    });

    stream.on('end', () => {
        console.log(cryptHash.digest('hex'));
    });

    stream.on('error', e => console.log(e));
};

await calculateHash();