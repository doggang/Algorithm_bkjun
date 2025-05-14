function solution(s){
    var str = s.toLowerCase().split("");
    var p = 0;
    var y = 0;
    for(let i=0; i<str.length; i++){
        if(str[i]=="p"){
            p+=1;
        }else if(str[i]=="y"){
            y+=1;
        }
    }
    return p==y ? true : false
}