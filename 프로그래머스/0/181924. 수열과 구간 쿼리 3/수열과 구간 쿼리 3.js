function solution(arr, queries) {
    var answer = arr;
    for(let i=0; i<queries.length; i++){
        var temp = 0;
        temp = arr[queries[i][0]];
        answer[queries[i][0]] = answer[queries[i][1]];
        answer[queries[i][1]] = temp;
    }
    return answer;
}