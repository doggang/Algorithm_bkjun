function solution(num_list) {
    var sum = 0;
    var mul = 1;
    if(num_list.length>=11){
        for(let i=0; i<num_list.length; i++){
            sum+=num_list[i];
        }
        return sum;
    }else if(num_list.length<=10){
        for(let i=0; i<num_list.length; i++){
            mul=mul*num_list[i];
        }
        return mul;
    }
}

//길이 11 이상이고, 모든 원소 합 10 이하이면, 모든 원소 곱 return