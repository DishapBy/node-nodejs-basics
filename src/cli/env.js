const parseEnv = () => {
    // Write your code here 
    const objects = Object.entries(process.env);
    let result = [];

    objects.forEach(([key, value]) => {
        if (key.includes('RSS_')) {
            result.push(key + '=' + value);
        };
    });
    result = result.join('; ')
    console.log(result);
};

parseEnv();