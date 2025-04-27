const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(Number);
input.shift();
let stack = [];
let result = [];
let current = 1;
for(let i=0; i<input.length; i++){
    while(input[i]>=current){
        stack.push(current);
        result.push("+");
        current++;
    }
    if(input[i] == stack[stack.length-1]){
        let num = stack.pop();
        result.push("-");
    }else{
        console.log("NO");
        return;
    }
};
console.log(result.join("\n"));