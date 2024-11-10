const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");
var a = parseInt(input[0].split(" ")[0]);
var b = parseInt(input[0].split(" ")[1]);
var c = parseInt(input[1]);

var h = Math.floor((a*60+b+c)/60);
var m = (a*60+b+c)%60;

if(h>=24){
    h-=24;
}

console.log(h, m);