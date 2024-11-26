const fs = require('fs');
const [a, b, c] = fs.readFileSync(0, 'utf-8').trim().toString().split("\n").map(Number);
let sum = a+b+c;
if(sum !== 180){
    console.log("Error");
}else{
    if(a==b && b==c){
        console.log("Equilateral");
    }else if(a==b || b==c || a==c){
        console.log("Isosceles");
    }else if(a!==b || b!==c || a!==c){
        console.log("Scalene");
    }
}