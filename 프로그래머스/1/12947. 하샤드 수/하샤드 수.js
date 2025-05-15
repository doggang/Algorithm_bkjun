function solution(x) {
    var sum = 0;
    var arr = x.toString().split("").map(Number);
    arr.forEach((item)=>{
        sum+=item;
    })
    return x%sum==0 ? true : false;
}