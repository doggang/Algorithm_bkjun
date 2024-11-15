const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim();
let backward = '';
let forward = ''
if(input.length%2!=0){ //홀수
    for(let i=input.length-1; i>parseInt(input.length/2); i--){
        backward+=input[i];
    }
    for(let i=0; i<parseInt(input.length/2); i++){
        forward+=input[i];
    }
    if(forward == backward){
        console.log(1);
    }else{
        console.log(0);
    }
}else if(input.length%2==0){ //짝수
    for(let i=input.length-1; i>parseInt(input.length/2-1); i--){
        backward+=input[i];
    }
    for(let i=0; i<parseInt(input.length/2); i++){
        forward+=input[i];
    }
    if(forward == backward){
        console.log(1);
    }else{
        console.log(0);
    }
}
