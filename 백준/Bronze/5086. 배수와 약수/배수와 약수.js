const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map((el)=>el.split(" ").map(Number));
input.splice(input.length-1, 1);
for(let i=0; i<input.length; i++){
    if(input[i][1] % input[i][0] ==0){
        console.log("factor");
    }else if(input[i][0] % input[i][1]==0){
        console.log("multiple");
    }else{
        console.log("neither");
    }
}