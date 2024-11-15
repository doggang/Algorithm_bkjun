const fs = require('fs');
const str = fs.readFileSync(0, 'utf-8').toString().trim();
const test = 'abcdefghijklmnopqrstuvwxyz';
for(let i=0; i<test.length; i++){
    console.log(str.indexOf(test[i]));
}
