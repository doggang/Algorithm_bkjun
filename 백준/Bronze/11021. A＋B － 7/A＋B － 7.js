const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

const count = Number(input[0]);
for(let i=1; i<=count; i++){
    var testcase = input[i].split(' ');
    console.log(`Case #${i}: ${Number(testcase[0]) + Number(testcase[1])}`);
}