const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");
const word = input[0];
const num = Number(input[1]);
console.log(word[num-1]);