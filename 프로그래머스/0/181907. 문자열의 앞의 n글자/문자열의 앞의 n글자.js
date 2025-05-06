function solution(my_string, n) {
    var answer = my_string.split("");
    answer = answer.splice(0,n).join('')
    return answer;
}