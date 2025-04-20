const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split(" ").map(Number);
const word = input[0];
const num= Number(input[1]);
console.log(parseInt(word,10).toString(num).toUpperCase());