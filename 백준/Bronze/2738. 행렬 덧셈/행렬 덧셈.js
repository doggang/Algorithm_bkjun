const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n").map((el) => el.split(" ").map(Number));
const N = Number(input[0][0]);
const M = Number(input[0][1]);
input.splice(0,1);
for(let i=0; i<N; i++){
    let sum = '';
    for(let j=0; j<M; j++){
        sum += (input[i][j]+input[i+N][j]).toString() + " ";
    }
    console.log(sum);
}
