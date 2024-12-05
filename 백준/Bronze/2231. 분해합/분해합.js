const fs = require('fs');
const input =  +fs.readFileSync(0, 'utf-8').trim().toString();
let data = '';
let num = [];
let min = 100000000;
let sum = 0;
let ans = 0;
for(i=input; i>=0; i--){
    data = i.toString();
    for(let j=0; j<data.length; j++){
        num.push(Number(data[j]));
        sum+=Number(data[j]);
    }
    sum+=i;
    if(sum==input){
        ans = Number(num.join(''));
    }
    num=[];
    sum=0;
}
console.log(ans);