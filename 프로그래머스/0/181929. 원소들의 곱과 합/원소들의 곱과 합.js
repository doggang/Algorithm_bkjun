function solution(num_list) {
    var sum =0;
    var mul = 1;
    for(let i=0; i<num_list.length; i++){
        sum+=num_list[i];
        mul=mul*num_list[i];
    }
    return mul<sum*sum ? 1 : 0;
}