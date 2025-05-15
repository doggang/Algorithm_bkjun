function solution(arr){
    var answer = [];
    var temp = -1;
    arr.forEach((item,idx)=>{
        if(temp!==item){
            answer.push(item);
        }
        temp=item;
    })
    return answer;
}