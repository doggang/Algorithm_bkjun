const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map((el)=>el.split(" ").map(Number));
input.splice(0,1);
let xMax=-10001;
let xMin=100001;
let yMax=-10001;
let yMin=100001;

input.forEach(item => {
    for(let i=0; i<2; i++){
        if(item[i] > xMax && i==0){
            xMax = item[i];
        }
        if(item[i] < xMin && i==0){
            xMin = item[i];
        }

        if(item[i] > yMax && i==1){
            yMax = item[i];
        }
        if(item[i] < yMin && i==1){
            yMin = item[i];
        }
    }
});
let xAns = 0;
let yAns = 0;
if(xMax<0 && xMin<0){
    xAns =(-1*xMin) - (-1*xMax);
}else{
    xAns = (xMax-xMin);
}
if(yMax<0 && yMin<0){
    yAns =(-1*yMin) - (-1*yMax);
}else{
    yAns = (yMax-yMin);
}

console.log(xAns*yAns);