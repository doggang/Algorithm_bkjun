const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const count = Number(input[0]);
const num = input[1].split('');

let ans = 0;
for(let i=0; i<count; i++){
    ans += Number(num[i]);
}
console.log(ans);