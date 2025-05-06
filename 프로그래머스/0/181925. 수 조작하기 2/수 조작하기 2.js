function solution(numLog) {
    var arr = numLog;
    var sum = arr.shift();
    var answer = "";
    var temp = 0;
    for(let i=0; i<arr.length; i++){
        temp = arr[i] - sum;
        sum += temp;
        switch (temp){
            case 1 : answer+="w"; break;
            case -1 : answer+="s"; break;
            case 10 : answer+="d"; break;
            case -10 : answer+="a"; break;
        }
    }
    return answer;
}