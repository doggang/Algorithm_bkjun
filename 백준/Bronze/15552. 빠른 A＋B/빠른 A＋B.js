const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

var ans='';
for(let i=1; i<=Number(input[0]); i++){
    ans +=Number(input[i].split(' ')[0])+Number(input[i].split(' ')[1]) +"\n";
}
console.log(ans);