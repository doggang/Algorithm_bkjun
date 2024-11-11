const fs = require('fs');
const input = +fs.readFileSync(0, 'utf-8').toString().trim();

for(let i=1; i<=input; i++){
    for(let j=input-1; j>=i; j--){
        process.stdout.write(" ");
    }
    for(let k=1; k<=i; k++){
        process.stdout.write("*");
    }
    console.log();
}