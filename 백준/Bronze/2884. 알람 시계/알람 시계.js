const fs = require('fs');
const [q, w] = fs.readFileSync(0, 'utf-8').toString().trim().split(" ").map(Number);
var a = q;
var b = w;

if(b>=45){
    b=b-45;
    console.log(a+" "+b);
}else if(b<45){
    if(a==0){
        a=23;
        b=60-(45-b);
        console.log(a+" "+b);
    }else{
        a=a-1;
        b=60-(45-b);
        console.log(a+" "+b);
    }
}