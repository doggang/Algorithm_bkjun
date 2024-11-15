const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim();
const test = input.split(" ");

if(test[0]=='' && test[test.length-1]==''){
    test.splice(0,1);
    test.splice(test.length-1, 1);
    console.log(test.length);
}else if(test[0]!='' && test[test.length-1]==''){
    test.splice(test.length-1, 1);
    console.log(test.length);
}else if(test[0]=='' && test[test.length-1]!=''){
    test.splice(0,1);
    console.log(test.length);
}else{
    console.log(test.length);
}


