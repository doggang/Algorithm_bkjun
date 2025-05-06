function solution(code) {
    var answer = '';
    var mode = 0;
    var ret = "";
    answer = code.split("");
    for(let i=0; i<answer.length; i++){
        if(mode===0){
            if(answer[i] !=="1"){ //문자가 1인지 확인하고 바꾸는 과정 (1이 아니므로 안바꿈.)
                if(i%2==0){
                    ret+=answer[i];
                }
            }else if(answer[i] =="1"){
                mode=1;
            }
        }else if(mode===1){
            if(answer[i] !=="1"){ //문자가 1인지 확인하고 바꾸는 과정 (1이 아니므로 안바꿈.)
                if(i%2==1){
                    ret+=answer[i];
                }
            }else if(answer[i] =="1"){
                mode=0;
            }
        }
    }
    
    if(ret==""){
        return "EMPTY";
    }else{
        return ret;
    }
}