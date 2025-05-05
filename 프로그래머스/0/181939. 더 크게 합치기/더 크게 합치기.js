function solution(a, b) {
    var answer = 0;
    let q = Number(a.toString() + b.toString());
    let w = Number(b.toString() + a.toString());
    if(q>w){
        answer = q;
    }else{
        answer = w;
    }
    return answer;
}