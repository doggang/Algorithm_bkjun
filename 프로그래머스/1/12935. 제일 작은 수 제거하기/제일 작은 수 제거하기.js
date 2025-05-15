function solution(arr) {
    var a = arr.slice();
    a.splice(a.indexOf(Math.min(...a)),1)
    a.length == 0 ? a.push(-1) : a;
    return a
}