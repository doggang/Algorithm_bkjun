const fs = require('fs');
const [word, num] = fs.readFileSync(0, 'utf-8').toString().trim().split(" ").map(Number);
console.log(word.toString(num).toUpperCase());