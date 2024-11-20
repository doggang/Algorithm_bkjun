const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n").map(Number);
const count = input[0];
let a = 0;
let b = 0;
let c= 0;
let d = 0;
let cur = 0;
for(let i=1; i<=count; i++){
    a = parseInt(input[i]/25);
    cur = parseInt(input[i]%25);
    b = parseInt(cur/10);
    cur = parseInt(cur%10);
    c = parseInt(cur/5);
    cur = parseInt(cur%5);
    d = parseInt(cur/1);
    cur = parseInt(cur%1);
    console.log(`${a} ${b} ${c} ${d}`);
}
