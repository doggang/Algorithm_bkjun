const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

const X = Number(input[0]);
const N = Number(input[1]);
var price = 0;
var count = 0;
var sum = 0;

for(let i=2; i<=N+1; i++){
    var spr = input[i].split(' ');
    price = Number(spr[0]);
    count = Number(spr[1]);
    sum+= price*count;
}

if(X!=sum){
    console.log("No");
}else{
    console.log("Yes");
}