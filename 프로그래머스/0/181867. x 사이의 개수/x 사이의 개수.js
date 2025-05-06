function solution(myString) {
    var answer = myString.split("");
    var sum = [];
    var a = 0;
    for(let i=0; i<answer.length; i++){
        if(answer[i]!=="x"){
            if(i==answer.length-1){
                a+=1;
                sum.push(a);
            }else{
                a+=1;
            }
        }else if(answer[i]=="x"){
            if(i==0){
                sum.push(0);
            }else if(i==answer.length-1){
                sum.push(a);
                sum.push(0);
            }else{
                sum.push(a);
                a=0;
            }
        }
    }
    return sum;
}