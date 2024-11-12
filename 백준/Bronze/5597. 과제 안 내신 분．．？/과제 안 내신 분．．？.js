const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n").map(Number);
let min = 100;
let max = 0;
for(let i=1; i<=30; i++){
    if(!input.includes(i)){
        if(i>max){
            max = i;
        }
        if(i<min){
            min = i;
        }
    }
}
console.log(min);
console.log(max);