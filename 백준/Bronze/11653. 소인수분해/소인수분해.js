const fs = require('fs');
let input =+ fs.readFileSync(0, 'utf-8').toString().trim();
let current = 2;
let arr = [];
while(input>1){
    if(input%current==0){
        input = parseInt(input/current);
        arr.push(current);
        console.log(current);
        current = 2;
    }else{
        current++;
    }
}
