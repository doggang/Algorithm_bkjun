function solution(my_string, s, e) {
    var reversed = my_string.slice(s, e+1).split("").reverse().join("");
    var a = my_string.split("");
    a.splice(s,e-s+1,reversed);
    return a.join("");
}