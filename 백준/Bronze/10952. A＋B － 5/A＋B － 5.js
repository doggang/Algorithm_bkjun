const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

for(let i=0; i<input.length-1; i++){
    var testcase = input[i].split(' ');
    console.log(Number(testcase[0]) + Number(testcase[1]));
}