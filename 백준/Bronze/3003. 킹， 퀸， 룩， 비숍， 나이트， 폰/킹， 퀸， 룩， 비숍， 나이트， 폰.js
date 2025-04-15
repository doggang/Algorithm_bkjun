const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split(" ");
const testCase=[1,1,2,2,2,8];
const answer=[0,0,0,0,0,0];
let an = '';
for(let i=0; i<input.length; i++){
    answer[i]=testCase[i]-input[i];
}
for(let i=0; i<input.length; i++){
  an+=answer[i];
  if(i!==5){
    an+=' ';
  }
}
console.log(an);
  
