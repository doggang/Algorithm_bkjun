const input =+ require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim();
let ans = '';
for(let i=1; i<=input; i++){
  for(let j=input-i; j>0; j--){
    ans += " ";
  }
  for(let k=0; k<2*i-1; k++){
     ans += "*";
  }
  ans += "\n";
}

for(let i=1; i<input; i++){
  for(let j=0; j<i; j++){
    ans += " ";
  }
  for(let k=0; k<2*(input-i)-1; k++){
    ans += "*";
  }
  ans += "\n";
}

console.log(ans);