function solution(my_string, overwrite_string, s) {
    var answer = '';
    
    let arr = my_string.split("");
    for(let i=0; i<overwrite_string.length; i++){
        arr[i+s] = overwrite_string[i];
    }
    answer = arr.join("");
    return answer;
}