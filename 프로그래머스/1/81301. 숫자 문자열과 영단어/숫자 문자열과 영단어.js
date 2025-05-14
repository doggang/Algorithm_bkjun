function solution(s) {
    var str = s;
    const arr = ["zero","one","two","three","four","five","six","seven","eight","nine"];
    for(let i=0; i<arr.length; i++){
      str=str.replaceAll(arr[i], i);
    }
    return Number(str);
}