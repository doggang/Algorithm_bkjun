function solution(code) {
    var answer = '';
    var mode = 0;
    var ret = "";
    answer = code.split("");
    for(let i=0; i<answer.length; i++){
        if(answer[i] == "1"){
            mode = mode===1 ? 0 : 1;
        }else{
            i%2==mode ? ret+=answer[i] : null;
        }
    }
    if(ret==""){
        return "EMPTY";
    }else{
        return ret;
    }
}