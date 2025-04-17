let input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim();
const arr = ["c=","c-","dz=","d-","lj","nj","s=","z="];
for(let i of arr){
    input = input.replaceAll(i,'a');
}
console.log(input.length);
