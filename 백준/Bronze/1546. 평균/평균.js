const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");
const count = Number(input[0]);
const score = input[1].split(' ');
let arr = [];
let ansarr = [];
let ans = 0;
for(let i=0; i<score.length; i++){
    arr.push(Number(score[i]));
}
const max = Math.max(...arr);
for(let i=0; i<score.length; i++){
    ansarr.push(arr[i]/max*100);
}
for(let i=0; i<score.length; i++){
    ans += ansarr[i];
}
console.log(ans/count);