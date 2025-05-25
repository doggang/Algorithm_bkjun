function solution(strings, n) {
    var answer = strings.sort();
    
    var temp=""
    for(let i=0; i<answer.length-1; i++){
        for(let j=i+1; j<answer.length; j++){
            if(answer[j][n] < answer[i][n]){
                temp = answer[i];
                answer[i] = answer[j];
                answer[j] = temp;
            }else if(answer[j][n] == answer[i][n] && answer[j] < answer[i]){
                temp = answer[i];
                answer[i] = answer[j];
                answer[j] = temp;
            }
        }
    }
    return answer;
}