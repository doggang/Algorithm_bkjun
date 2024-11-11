const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

const sum = Number(input[0]);
const findNum = Number(input[2]);
const testcase = input[1].split(' ');
var count = 0;

for(let i=0; i<sum; i++){
    if(findNum==Number(testcase[i])){
        count+=1;
    }
}
console.log(count);