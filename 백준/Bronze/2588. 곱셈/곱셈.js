const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n");
const a = parseInt(input[0]);
const b = parseInt(input[1]);
const c = input[1].split('');

const three = a*parseInt(c[2]);
const four = a*parseInt(c[1]);
const five = a*parseInt(c[0]);

console.log(three);
console.log(four);
console.log(five);
console.log(a*b);