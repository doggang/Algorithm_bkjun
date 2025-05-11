function solution(my_string, queries) {
    var arr = my_string.split("");
  for(let i=0; i<queries.length; i++){

      var reversed = arr.slice(queries[i][0], queries[i][1]+1).reverse();
      arr.splice(queries[i][0],queries[i][1]-queries[i][0]+1,...reversed);
  }
  var answer = arr.join("");
    return answer;
}