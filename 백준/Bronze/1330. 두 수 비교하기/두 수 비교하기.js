const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split(" ").map(Number);
const a = input[0];
const b = input[1];
const ans = (a>b)?'>':(a<b)?'<':'==';
console.log(ans);