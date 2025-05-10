function solution(my_string, index_list) {
    var answer=my_string.split("");
    var arr = [];
    for(let i=0; i<index_list.length; i++){
        arr.push(my_string[index_list[i]]);
    }
    return arr.join("");
}