const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map((el)=>el.split(" ").map(Number));
input.splice(input.length-1, 1);
let long = 0;
input.forEach(item => {
    long = item.indexOf(Math.max(...item));
    long = item.splice(long,1)[0];
    if(long < item[0]+item[1]){
        if(long==item[0] && long==item[1]){
            console.log("Equilateral")
        }else if((long==item[0] && long!==item[1]) || (long==item[1] && long!==item[0]) || (item[0]==item[1] && long!==item[0])){
            console.log("Isosceles")
        }else{
            console.log("Scalene");
        }
    }else{
        console.log("Invalid");
    }
});