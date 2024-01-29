import { Transform } from 'stream';


const transform = async () => {
    // Write your code here

    const toReverse = new Transform({
        transform(data, encoding, callback) {
            callback(null, data.toString().split('').reverse().join(''));
        }
    });

    process.stdin.setEncoding('utf-8');

    process.stdin.pipe(toReverse).pipe(process.stdout);

};

await transform();