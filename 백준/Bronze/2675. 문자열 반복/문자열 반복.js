const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");
const count = Number(input[0]);
let num = 0;
for(let i=1; i<=count; i++){
    let repeat = Number(input[i].split(' ')[0]);
    let str = input[i].split(' ')[1];
    for(let j=0; j<str.length; j++){
        for(let k=0; k<repeat; k++){
            process.stdout.write(str[j])
        }
    }
    console.log();
}