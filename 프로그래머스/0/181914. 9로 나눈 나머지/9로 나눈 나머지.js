function solution(number) {
    var answer = 0;
    var arr = number.split("");
    arr.forEach((item)=>{
        answer+=Number(item);
    })
    return answer%9;
}