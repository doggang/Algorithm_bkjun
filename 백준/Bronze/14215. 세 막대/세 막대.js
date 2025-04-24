const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split(" ").map(Number);
let long = input.splice(input.indexOf(Math.max(...input)),1)[0];
if(long >= input[0]+input[1]){
    long=input[0]+input[1]-1;
    console.log(long+input[0]+input[1]);
}else{
    console.log(long+input[0]+input[1])
}