const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n").map((el)=>el.split(' ').map(Number));
let max = -1;
let row = 0;
let col = 0;
for(let i=0; i<input.length; i++){
    for(let j=0; j<input[i].length; j++){
        if(input[i][j] > max){
            max = input[i][j];
            row = i+1;
            col = j+1;
        }
    }
}
console.log(`${max}
${row} ${col}`);