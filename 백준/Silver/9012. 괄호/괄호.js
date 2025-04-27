const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map((el)=>el.split(""));
let flag = 0;
let left = 0
let right = 0;
const num = input.shift();
for(let i=0; i<input.length; i++){
    for(let j=0; j<input[i].length; j++){
        if(input[i][j] == "("){
            left++;
        }else{
            right++;
        }

        if(right>left){
            console.log("NO");
            flag=1;
            break;
        }
    }
    if(right!==left && flag==0){
        console.log("NO");
    }else if(flag==0 && left==right){
        console.log("YES");
    }
    flag = 0
    left = 0;
    right =0;
}