const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let num = input[1].split(' ');
let arr = [];
let count = 0;
for(let i=0; i<num.length; i++){
    let test = Number(num[i]);
    for(let j=1; j<=test; j++){
        if(test%j == 0){
            arr.push(j);
        }
    }
    if(arr.length == 2){
        count++;
    }
    arr = [];
}
console.log(count);