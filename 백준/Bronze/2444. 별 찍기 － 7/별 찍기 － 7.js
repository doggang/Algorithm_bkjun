const fs = require('fs');
const input = +fs.readFileSync(0, 'utf-8').toString().trim();
for(let i=0; i<input; i++){
    for(let j=input-i-1; j>0; j--){
        process.stdout.write(" ");
    }
    for(let j=0; j<=i*2; j++){
        process.stdout.write("*");
    }
    console.log();
}
for(let i=input-1; i>0; i--){
    for(let j=input-1; j>=i; j--){
        process.stdout.write(" ");
    }
    for(let j=i*2-1; j>0; j--){
        process.stdout.write("*");
    }
    console.log();
}