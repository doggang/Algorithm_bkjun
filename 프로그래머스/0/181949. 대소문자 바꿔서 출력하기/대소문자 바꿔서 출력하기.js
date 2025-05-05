const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let a = "";
rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    for(let i=0; i<str.length; i++){
        if(str[i].toUpperCase() === str[i]){
            a += str[i].toLowerCase();
        }else{
            a += str[i].toUpperCase();
        }
    }
    console.log(a);
});