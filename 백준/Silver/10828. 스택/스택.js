const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map((el)=>el.split(" "));
const num = input.splice(0,1)[0][0];
let stack = [];
let top = '';
for(let i=0; i<num; i++){
    switch(input[i][0]){
        case "push" : stack.push(input[i][1]);
            break;
        case "pop" : top = stack.pop();
            if(top == undefined){
                console.log("-1")
            }else{
                console.log(top);
            };
            break;
        case "size" : console.log(stack.length);
            break;
        case "empty" : 
            if(stack.length==0){
                console.log("1");
            }else{
                console.log("0")
            }
            break;
        case "top" : 
            if(stack.length==0){
                console.log("-1")
            }else{
                console.log(stack[stack.length-1]);
            }
            break;
       default : break;
    }
}