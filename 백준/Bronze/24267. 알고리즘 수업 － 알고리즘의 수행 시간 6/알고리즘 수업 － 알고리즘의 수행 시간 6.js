const fs = require('fs');
const input = +fs.readFileSync(0, 'utf-8').trim().toString();
const num = BigInt(input);
let sum =0n;
for(let i=num-2n; i>0n; i--){
    sum+=i*(i+1n)/2n;
}
console.log(`${sum}`);
console.log(3);
