function solution(s) {
    var arr = s.split("");
    var lower = [];
    var upper = [];
    arr.forEach((item)=>item>="a" ? lower.push(item) : upper.push(item));
    
    lower = lower.sort(function compare(a, b) {
      if (a > b) return -1;
      if (a < b) return 1;
      return 0;
    });
    
    upper = upper.sort(function compare(a, b) {
      if (a > b) return -1;
      if (a < b) return 1;
      return 0;
    });
    
    var answer = lower.join("") + upper.join("");
    
    return answer;
}