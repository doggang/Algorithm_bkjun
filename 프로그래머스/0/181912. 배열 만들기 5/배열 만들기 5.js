function solution(intStrs, k, s, l) {
    var answer = [];
    intStrs.forEach((item)=>{
        var arr = Number(item.slice(s,s+l));
        if(arr > k){
            answer.push(arr);
        }
    })
    return answer;
}