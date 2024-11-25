const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().toString().split('\n').map(Number);
console.log(input[0] * input[1]);