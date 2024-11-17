const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n").map((el)=>el.split(''));
let max = 0;
let ans = '';

for(let i=0; i<input.length; i++){
    if(input[i].length > max){
        max = input[i].length;
    }
}
for(let i=0; i<max; i++){
    for(let j=0; j<input.length; j++){
        if(input[j][i] !== undefined){
            process.stdout.write(input[j][i]);
        }
    }
}