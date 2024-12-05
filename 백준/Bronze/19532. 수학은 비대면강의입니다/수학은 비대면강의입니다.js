const fs = require('fs');
const [a,b,c,d,e,f] =  fs.readFileSync(0, 'utf-8').trim().toString().split(' ').map(Number);
for(let i=-999; i<=999; i++){
    for(let j=-999; j<=999; j++){
        if(a*i + b*j == c){
            if(d*i + e*j == f){
                if((a+d)*i + (b+e)*j === c+f){
                    console.log(i, j);
                }
            }
        }
    }
}