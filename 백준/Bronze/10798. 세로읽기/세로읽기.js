const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n");
let max = 0;
for(let i=0; i<input.length; i++){
  if(input[i].length > max){
    max = input[i].length;
  }
}
for(let i=0; i<max; i++){
  for(let j=0; j<input.length; j++){
    if(input[j][i]==undefined){
      continue;
    }
    process.stdout.write(input[j][i]);
  }
}