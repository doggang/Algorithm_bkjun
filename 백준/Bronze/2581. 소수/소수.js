const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
let arr = [];
let sum = 0;
let min = 10001;
let chk = -1;
for(let i=input[0]; i<=input[1]; i++){
    for(let j=1; j<=i; j++){
        if(i%j==0){
            arr.push(j);
        }
    }
         if(arr.length == 2){
            sum += arr[1];
            if(arr[1] < min){
                min = arr[1];
            }
            chk = 1;
        }
    arr = [];
}
if(chk == 1){
    console.log(sum);
    console.log(min);
}else{
    console.log(-1);
}