const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const arr = [];
for(let i=1; i<input.length; i++){
    arr.push(input[i]);
}
let temp = '';
let answer = arr.length;
arr.forEach((item)=>{
    temp = item[0];
    for(let i=1; i<item.length; i++){
        if(temp.includes(item[i]) && item[i]!==item[i-1]){
            answer--;
            break;
        }
        temp+=item[i];
    }
});
console.log(answer);