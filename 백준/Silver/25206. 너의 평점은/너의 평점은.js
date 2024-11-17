const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
let test = [];
let major = [];
let score = [];
let tier = [];

let ans = [];
let sum = 0;
let count = 0;
for(let i=0; i<input.length; i++){
    test = input[i].split(' ');
    major.push(test[0]);
    score.push(test[1]);
    tier.push(test[2]);
    if(tier[i]=='A+'){
        ans.push(score[i]*4.5);
    }else if(tier[i]=='A0'){
        ans.push(score[i]*4.0);
    }else if(tier[i]=='B+'){
        ans.push(score[i]*3.5);
    }else if(tier[i]=='B0'){
        ans.push(score[i]*3.0);
    }else if(tier[i]=='C+'){
        ans.push(score[i]*2.5);
    }else if(tier[i]=='C0'){
        ans.push(score[i]*2.0);
    }else if(tier[i]=='D+'){
        ans.push(score[i]*1.5);
    }else if(tier[i]=='D0'){
        ans.push(score[i]*1.0);
    }else if(tier[i]=='P'){ //계산제외
        ans.push("p");
    }else if(tier[i]=='F'){
        ans.push(score[i]*0.0);
    }
}

for(let i=0; i<ans.length; i++){
    if(ans[i]!=='p'){
        sum+=Number(ans[i]);
        count+=Number(score[i]);
    }
}

console.log(sum/count);