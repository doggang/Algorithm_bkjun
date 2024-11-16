const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim();
let question = input.split(''); //question 중복 O

for(let i=0; i<input.length; i++){
    question[i] = question[i].toUpperCase();
}

const arr = [...new Set(question)]; //arr 중복 X
let ansArr = Array.from({length: arr.length}, () => 0); // 횟수

let count = [];
for(let i=0; i<arr.length; i++){
    for(let j=0; j<question.length; j++){
        if(arr[i] == question[j]){
            ansArr[i] += 1;
        }
    }
}
let check = 0;
let max = ansArr.splice(ansArr.indexOf(Math.max(...ansArr)),1,-1);

for(let i=0; i<ansArr.length; i++){
    if(max[0] == ansArr[i]){
        console.log("?");
        check=1;
        break;
    }
}

ansArr.splice(ansArr.indexOf(-1),1,max[0]);

if(check==0){
    console.log(arr[ansArr.indexOf(max[0])]);
}
