const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().toString().split("\n").map((el)=>el.split(" ").map(Number));
let max = 0;
let min = 0;
let mid = 0;
for(let i=0; i<input.length; i++){
    max = Number(input[i].splice(input[i].indexOf(Math.max(...input[i])),1));
    min = Number(input[i].splice(input[i].indexOf(Math.min(...input[i])),1));
    mid = input[i][0];
    if((max>=min+mid) && ((max!==0 && min!==0) && ( min!==0 && mid!==0))){
        console.log("Invalid");
    }else if(max<min+mid){
        if(max==min && min==mid){
            console.log("Equilateral");
        }else if(max==min || min==mid || max==mid){
            console.log("Isosceles");
        }else if(max!==min && min!==mid){
            console.log("Scalene");
        }
    }
}
