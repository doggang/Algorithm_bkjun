const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n")
const boxNum = Number(input[0].split(' ')[0]);
const boxCount = Number(input[0].split(' ')[1]);
let arr = Array.from({length: boxNum}, () => 0);
let num = '';

for(let i=1; i<boxCount+1; i++){
    let a = input[i].split(' ');
    let first = Number(a[0]);
    let last = Number(a[1]);
    let ballCount = Number(a[2]);
    for(let j=first; j<=last; j++){
        arr[j-1]=ballCount;
    }
}
for(let i=0; i<boxNum; i++){
    num+=arr[i]+" ";
}

console.log(num);
