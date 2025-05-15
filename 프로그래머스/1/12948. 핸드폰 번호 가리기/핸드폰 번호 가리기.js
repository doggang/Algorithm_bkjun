function solution(phone_number) {
    var len = parseInt(phone_number.length);
    var arr = phone_number.split("");
    var star = length = arr.splice(0,len-4);
    var answer = [];
    
    for(let i=0; i<star.length; i++){
        answer.push("*");
    }
    
    for(let i=0; i<arr.length; i++){
        answer.push(arr[i]);
    }
    
    answer = answer.join("")
    return answer;
}