const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n").map((el)=>el.split(' ').map(Number));
const row = 100;
const col = 100;
const count = input[0];
let ex = 0;
input.splice(0,1);
let arr = Array.from(Array(row), ()=> Array(col).fill(0));

for(let i=0;  i<count ;i++){
    let x = input[i][0];
    let y = input[i][1];
    for(let j=0; j<10; j++){
        for(let k=0; k<10; k++){
            if(arr[x+j][y+k] == 0){
                arr[x+j][y+k] = 1;
                ex++;
            }
        }
    }
}
console.log(ex);