const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const arr = [];
for(let i=0; i<input[0]; i++){
    if(input[0] % (i+1) == 0){
        arr.push(i+1);
    }
}
if(arr.length<input[1]){
    console.log(0);
}else{
    console.log(arr[input[1]-1]);
}
