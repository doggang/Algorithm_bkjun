function solution(my_strings, parts) {
    var answer = "";
    var i =0;
    for(let [s,e] of parts){
       answer += my_strings[i].slice(s,e+1);
        i+=1;
    }
    return answer;
}