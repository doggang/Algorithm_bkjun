const fs = require('fs');
const input =  +fs.readFileSync(0, 'utf-8').trim().toString();
let count = 0;
let num = 666;
while(input !== count){
    if(String(num).includes(666)){
        count++;
    }
    if(count==input){
        console.log(num);
    }
    num++;
}