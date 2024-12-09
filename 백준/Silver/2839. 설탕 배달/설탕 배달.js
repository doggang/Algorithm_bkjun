const fs = require('fs');
const a =+fs.readFileSync(0, 'utf-8').trim().toString();
let input = a;
let min = 10000;
let three = 3;
let five = 5;
for(let i=0; i<1670; i++){ //5
    for(let j=0; j<1670; j++){ //3
        if(three*j + five*i == input && i+j <min){
            min = i+j;
        }
        
    }
}
if(min == 10000){
    console.log(-1);
}else{
    console.log(min);
}