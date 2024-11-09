const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split(" ").map(Number);
const a = input[0];
const b = input[1];
const c = input[2];
console.log(a+b+c);