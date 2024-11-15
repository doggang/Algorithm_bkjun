const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split(' ').map(Number);
const arr = [1, 1, 2, 2, 2, 8];
let ans = '';
for(let i=0; i<input.length; i++){
    ans += arr[i]-input[i]+" ";
}
console.log(ans);
