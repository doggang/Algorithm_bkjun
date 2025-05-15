function solution(arr, divisor) {
    var answer =arr.filter((item)=>item%divisor==0).sort((a,b)=>a-b);
    answer.length == 0 ? answer.push(-1) : null;
    return answer;
}