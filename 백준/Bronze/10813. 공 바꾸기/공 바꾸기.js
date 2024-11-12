const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n")
const boxNum = parseInt(input[0].split(' ')[0]);
const changeCount = parseInt(input[0].split(' ')[1]);
let arr = [];
let ans = '';
let current = 0;

for(let i=1; i<=boxNum; i++){
    arr[i]=i;
}

for(let i=1; i<=changeCount; i++){
    let first = Number(input[i].split(' ')[0]);
    let last = Number(input[i].split(' ')[1]);
    current = arr[first];
    arr[first] = arr[last];
    arr[last] = current;
}

for(let i=1; i<=boxNum; i++){
    ans += arr[i]+" ";
}

console.log(ans);