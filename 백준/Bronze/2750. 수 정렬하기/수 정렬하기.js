const a = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split('\n').map(Number);
let input = a;
input.splice(0,1);

for(let i=0; i<input.length-1; i++){
  let min = i;
  for(let j=i+1; j<input.length; j++){
    if(input[min] > input[j]){
      min = j;
    }
  }
  if(min !== i){
    [input[i], input[min]] = [input[min],input[i]];
  }
}
for(let i of input){
  console.log(i);
}