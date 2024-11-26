const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().toString().split(" ").map(Number);
let max = Number(input.splice(input.indexOf(Math.max(...input)),1));
let min = Number(input.splice(input.indexOf(Math.min(...input)),1));
let mid = input[0];
if(max==min && min==mid){
    console.log(max+min+mid);
}else if(max>=min+mid){
    while(max>=min+mid){
        max--;
    }
    console.log(max+min+mid);
}else{
    console.log(max+min+mid);
}