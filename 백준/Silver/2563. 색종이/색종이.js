const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map((el)=>el.split(" ").map(Number));
const num = input.splice(0,1)[0][0];
let arr = Array.from({ length: 100 }, () => Array(100).fill(0));

for (let i = 0; i < 100; i++) {
  arr[i] = []; // 행 초기화
  for (let j = 0; j < 100; j++) {
    arr[i][j] = 0; // 기본값 0
  }
}

for(let i=0; i<num; i++){
  let x = input[i][0];
  let y = input[i][1];
    for(let j=0; j<10; j++){
      for(let k=0; k<10; k++){
        arr[x+j][y+k] = 1;
      }
    }
}

let result = 0;
for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 100; j++) {
    if (arr[i][j] === 1) result++;
  }
}
console.log(result);