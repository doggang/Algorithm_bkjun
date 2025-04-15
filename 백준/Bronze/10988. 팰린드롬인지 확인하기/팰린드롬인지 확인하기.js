const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim();
let testCase = '';
let ans = '';
if(input.length%2 == 0){
  for(let i=0; i<input.length/2; i++){
    testCase += input[i];
  }
  for(let i=input.length-1; i>=input.length/2; i--){
    ans += input[i];
  }
} else if(input.length%2 == 1){
  for(let i=0; i<Math.floor(input.length/2); i++){
    testCase += input[i];
  }
  for(let i=input.length-1; i>Math.floor(input.length/2); i--){
    ans += input[i];
  }
}
if(ans==testCase){
  console.log(1);
}else{
  console.log(0);
}