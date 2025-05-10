function solution(l, r) {
    var answer = [];
    var str = [];
    for(let i=l; i<=r; i++){
        var str = i.toString().split("");
        if((str.includes("5") || str.includes("0") )&& !str.includes("1") && !str.includes("2") && !str.includes("3") 
          && !str.includes("4") && !str.includes("6") && !str.includes("7") && !str.includes("8") && !str.includes("9") ){
            answer.push(i);
        }
    }
    if(answer.length ==0){
        answer.push(-1);
    }
    
    return answer;
}