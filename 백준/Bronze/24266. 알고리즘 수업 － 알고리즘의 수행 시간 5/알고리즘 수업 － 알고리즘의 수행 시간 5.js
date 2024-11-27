const fs = require('fs');
const input = +fs.readFileSync(0, 'utf-8').trim().toString();
const num = BigInt(input);
console.log(`${num*num*num}`);
console.log(3);