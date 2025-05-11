function solution(my_string) {
    var answer = [];
    var str = my_string;
    var arr = str.split("");
    
    for(let i=0; i<my_string.length; i++){
        answer.push(str);
        arr.splice(0,1);
        str = arr.join("");
    }
    return answer.sort();
}