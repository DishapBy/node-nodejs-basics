const parseArgs = () => {
    const arrArguments = process.argv.slice(2);
    let result = [];
    for (let i = 0; i < arrArguments.length; i+= 2) {
        result.push(arrArguments[i] + ' is ' + arrArguments[i + 1]);
    }
    console.log(result.join(', '));
};

parseArgs();