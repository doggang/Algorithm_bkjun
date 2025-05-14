function solution(n) {
    var arr = n.toString().split("").map(Number);
    arr = Number(arr.sort((arr,b)=>b-arr).join(""));
    return arr;
}