function solution(num) {
    var i = 0;
    var n = num;
    while(n!==1){
        n%2==0 ? n/=2 : n=n*3+1;
        i++;
        if(i==500){
            return -1;
        }
    }
    return i;
}