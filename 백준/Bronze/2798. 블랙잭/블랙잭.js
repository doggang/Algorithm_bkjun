const fs = require('fs');
const input =  fs.readFileSync(0, 'utf-8').trim().toString().split("\n").map((el)=>el.split(' ').map(Number));
const count = input[0][0];
const limit = input[0][1];
const card = input[1];
let sum = 0;
let max = 0;
sum = BigInt(sum);
max = BigInt(max);
for(let i=0; i<card.length; i++){
    for(let j=i+1; j<card.length; j++){
        for(let k=j+1; k<card.length; k++){
            sum = card[i] + card[j] + card[k];
            if(limit>=sum && sum>=max){
                max = sum;
            }
        }
    }
}
console.log(max);