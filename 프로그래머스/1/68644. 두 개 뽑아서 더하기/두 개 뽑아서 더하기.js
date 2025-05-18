function solution(numbers) {
    var answer = [];
    var arr = numbers.sort((a,b)=>a-b);
    for(let i=0; i<arr.length-1; i++){
        for(let j=i+1; j<arr.length; j++){
            answer.push(arr[i] + arr[j]);
        }
    }
    return [...new Set(answer)].sort((a,b)=>a-b);
}