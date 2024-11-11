const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

const N = Number(input[0].split(' ')[0]);
const X = Number(input[0].split(' ')[1]); //x보다 작은수를 입력 순으로 공백 구분해 출력
const num = input[1].split(' ');
let a = '';

for(let i=0; i<N; i++){
    if(X>Number(num[i])){
        a+=Number(num[i])+" ";
    }
}
console.log(a);

