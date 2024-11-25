const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().toString().split(' ').map(Number);
let x = 0;
let y = 0;
if(input[0] < Math.abs(input[0]-input[2])){
    x = input[0];
}else{
    x= Math.abs(input[0]-input[2]);
}
if(input[1] < Math.abs(input[1]-input[3])){
    y = input[1];
}else{
    y= Math.abs(input[1]-input[3]);
}
if(x>y){
    console.log(y);
}else{
    console.log(x);
}