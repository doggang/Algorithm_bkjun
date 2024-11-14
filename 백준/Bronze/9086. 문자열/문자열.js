const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");
const count = Number(input[0]);
let ans ='';
for(let i=0; i<count; i++){
    let word = input[i+1];
    process.stdout.write(word[0]+word[word.length-1]);
    console.log("");
}