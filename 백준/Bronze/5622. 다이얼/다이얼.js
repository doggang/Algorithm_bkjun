const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim();
const test = ['','','','ABC','DEF','GHI','JKL','MNO','PQRS','TUV','WXYZ'];
let ans = 0;
for(let i=0; i<input.length; i++){
    for(let j=2; j<test.length; j++){
        let testA = test[j];
        if(testA.indexOf(input[i]) != -1){
            ans+=j;
        }
    }
}
console.log(ans);