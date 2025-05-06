function solution(num_list) {
    var a = "";
    var b = "";
    for(let i=0; i<num_list.length; i++){
        if(num_list[i]%2==0){
            a+=num_list[i].toString();
        }else{
            b+=num_list[i].toString();
        }
    }
    return Number(a) + Number(b);
}