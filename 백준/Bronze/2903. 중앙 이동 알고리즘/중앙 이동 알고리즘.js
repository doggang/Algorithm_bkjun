const fs = require('fs');
const input = +fs.readFileSync(0, 'utf-8').toString().trim();
console.log(((2**input) + 1) * ((2**input) + 1));
