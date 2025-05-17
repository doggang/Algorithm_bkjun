function solution(t, p) {
    var answer = [];
    var arr = t.split("");
    for(let i=0; i<t.length-p.length+1; i++){
        if(Number(arr.slice(i,i+p.length).join("")) <= Number(p)){
            answer.push(Number(arr.slice(i,i+p.length).join("")));
        }
    }
    return answer.length;
}