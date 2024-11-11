const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");
const a = Number(input[0].split(' '));
const b = input[1].split(' ');

let max = -1000000;
let min = 1000000;

for(let i=0; i<a; i++){
    const sco = Number(b[i]);
    if(sco>max){
        max = sco;
    }
    if(sco<min){
        min = sco;
    }
}
console.log(min, max);