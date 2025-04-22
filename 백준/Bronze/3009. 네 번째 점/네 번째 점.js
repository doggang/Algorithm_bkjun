const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map((el)=>el.split(" ").map(Number));
let Xmax = 0; 
let Xmin = 10000;
let Ymax = 0;
let Ymin = 10000;
input.forEach(item => {
  if(item[0] > Xmax){
    Xmax = item[0];
  }
  if(item[0] < Xmin){
    Xmin = item[0];
  }
  if(item[1] > Ymax){
    Ymax = item[1];
  }
  if(item[1] < Ymin){
    Ymin = item[1];
  }
});
let ansX = 0 ;
let ansY = 0;
let max = 0;
let min = 0;
for(let j=0; j<2; j++){
  for(let i=0; i<3; i++){
    if(input[i][j] == Xmax && j==0){
      max++;
    }  else if(input[i][j] !== Xmax && j==0){
      min++;
    }
    if(input[i][j] == Ymax && j==1){
      max++;
    }  else if(input[i][j] !== Ymax && j==1){
      min++;
    }
  }
  if(max>min && j==0){
    ansX = Xmin;
  }else if(max<min && j==0){
    ansX=Xmax;
  }
  if(max>min && j==1){
    ansY = Ymin;
  }else if(max<min && j==1){
    ansY=Ymax;
  }
  max=0;
  min=0;
}
console.log(ansX, ansY);