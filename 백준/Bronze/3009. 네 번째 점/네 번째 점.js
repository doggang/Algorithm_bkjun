const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().toString().split('\n').map((el) => el.split(' ').map(Number));
const x = [input[0][0], input[1][0], input[2][0]];
const y = [input[0][1], input[1][1], input[2][1]];
let ans = [];
if (x[0] === x[1]) {
    ans.push(x[2]);
} else if (x[0] === x[2]) {
    ans.push(x[1]);
} else {
    ans.push(x[0]);
}
if (y[0] === y[1]) {
    ans.push(y[2]);
} else if (y[0] === y[2]) {
    ans.push(y[1]);
} else {
    ans.push(y[0]);
}
console.log(ans[0], ans[1]);