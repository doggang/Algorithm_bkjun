const fs = require('fs');
let input = fs.readFileSync(0, 'utf-8').toString().trim();
const ans = ['c=','c-','dz=','d-','lj','nj','s=','z='];
for(let i of ans){
    input = input.replaceAll(i,'a');
}
console.log(input.length);