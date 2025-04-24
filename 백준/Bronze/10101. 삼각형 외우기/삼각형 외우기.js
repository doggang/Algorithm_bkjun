const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(Number);
if(input[0]==input[1] && input[1]==input[2] && input[0]==60){
    console.log("Equilateral");
}else if((input[0]+input[1]+input[2]==180)){
    if((input[0]==input[1] && input[0]!==input[2]) || (input[0]==input[2] && input[0]!==input[1]) || (input[1]==input[2] && input[1]!==input[0])){
        console.log("Isosceles");
    }else if(input[0]!==input[1] && input[1]!==input[2] && input[0]!==input[2]){
        console.log("Scalene");
    }
}else{
    console.log("Error");
}