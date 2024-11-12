const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");
const boxNum = Number(input[0].split(' ')[0]);
const changeCnt = Number(input[0].split(' ')[1]);
let arr = [];
let ans = '';

for(let i=1; i<=boxNum; i++){
    arr[i] = i;
}

for(let i=0; i<changeCnt; i++){
    let first = Number(input[i+1].split(' ')[0]);
    let last = Number(input[i+1].split(' ')[1]);
    let testArr =[];
    for(let j=first; j<=last; j++){
        testArr.push(arr[j]);
    }
    for(let j=first; j<=last; j++){
        let a = testArr.pop();
        arr[j] = a;
    }
}
for(let i=1; i<=boxNum; i++){
    ans += arr[i]+" ";
}
console.log(ans);