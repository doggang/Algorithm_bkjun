const fs = require('fs');
const a = +fs.readFileSync(0, 'utf-8').toString().trim();
var sum = 0;
for(let i=1; i<=a; i++){
    sum+=i;
}
console.log(sum);