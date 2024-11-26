const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().toString().split("\n").map((el)=>el.split(' ').map(Number));
const count = input.splice(0,1);
let x =[];
let y =[];
for(let i=0; i<count; i++){
    x.push(input[i][0]);
    y.push(input[i][1]);
}
console.log((Math.max(...x) - Math.min(...x)) * (Math.max(...y) - Math.min(...y)));