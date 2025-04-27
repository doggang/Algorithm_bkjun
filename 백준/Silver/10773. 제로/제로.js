const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(Number);
let result = 0;
let num = input.shift();
let stack = [];
for(let i=0; i<num; i++){
    if(input[i] !==0){
        stack.push(input[i]);
    }else{
        stack.pop();
    }
}
stack.forEach(item => {
    result += item;
});
console.log(result);