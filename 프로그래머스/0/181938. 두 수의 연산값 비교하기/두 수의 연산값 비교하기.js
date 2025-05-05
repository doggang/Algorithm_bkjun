function solution(a, b) {
    var answer = 0;
    let q = 0;
    let w = 0;
    q = Number(a.toString()+b.toString());
    w = 2*a*b;
    if(w>q){
        answer = w
    }else{
        answer = q
    }
    return answer;
}