const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const left = [];
const right = [];
for(let i=0; i<input.length; i++){
    left.push(input[i].split(" ")[0]);
    right.push(input[i].split(" ")[1]);
    if(i==input.length-1){
    }else if(right[i] % left[i]==0){
        console.log("factor");
    }else if(left[i] % right[i] ==0){
        console.log("multiple");
    }else{
        console.log("neither");
    }
}

