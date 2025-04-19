const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n");
input.splice(0,1);
let temp = '';
let length = input.length;
input.forEach(item => {
    temp = item[0];
    for(let i=1; i<item.length; i++){
        if(temp.includes(item[i]) && item[i] !== item[i-1]){
            length--;
            break;
        }
        temp+=item[i];
    }
});
console.log(length);