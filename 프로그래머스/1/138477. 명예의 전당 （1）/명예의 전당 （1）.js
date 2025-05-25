function solution(k, score) {
    var answer = [];
    var bad = [];
    for(let i=0; i<score.length; i++){
        answer.push(score[i]);
        answer.sort((a,b)=>b-a);
        if(answer.length > k){
            answer.pop();
        }
        bad.push(Math.min(...answer));
    }
    return bad;
}