const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
let arr = [];
let ans = '';
for(let i=0; i<input.length; i++){
    if(input[i] == -1){
        break;
    }else{
        //시작
        for(let j=1; j<input[i]; j++){
            if(input[i] % j == 0){
                arr.push(j);
            }
        }
        let sum =0
        for(let j=0; j<arr.length; j++){
            sum += arr[j];
        }
        if(sum == input[i]){
            ans = input[i] + ' = ';
            for(let j=0; j<arr.length; j++){
                if(j!==arr.length-1){
                    ans += arr[j] + " + ";
                }else{
                    ans += arr[j];
                }
            }
        }else{
            ans = input[i] + ' is NOT perfect.';
        }
        console.log(ans);
        ans = '';
        arr = [];
    }
}

