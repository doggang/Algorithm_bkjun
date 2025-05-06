function solution(strArr) {
    var arr = [];
    for(let i=0; i<strArr.length; i++){
        if(i%2==1){  //짝수 대문자
            arr.push(strArr[i].toUpperCase());
        }else{ //홀수 소문자
            arr.push(strArr[i].toLowerCase());
        }
    }
    return arr;
}