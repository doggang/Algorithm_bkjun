const fs = require('fs');
const [a,b] = fs.readFileSync(0, 'utf-8').toString().trim().split(' ');

let testA = '';
let testB = '';
for(let i=a.length-1; i>=0; i--){
    testA+=a[i];
}
for(let i=b.length-1; i>=0; i--){
    testB+=b[i];
}
let ans = [Number(testA), Number(testB)];
console.log(Math.max(...ans));