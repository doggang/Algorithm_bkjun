function solution(s, n) {
    var answer = '';
    var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var arr = s.split("");
    
    for(let i=0; i<arr.length; i++){
        if(arr[i] === arr[i].toUpperCase() && arr[i] !==" "){
            if(upper.indexOf(arr[i]) + n>= 26){
                answer += upper[upper.indexOf(arr[i]) + n - 26]
            }else{
                answer += upper[upper.indexOf(arr[i]) + n];
            }
        }else if(arr[i] === arr[i].toLowerCase() && arr[i] !==" "){
            if(lower.indexOf(arr[i]) + n>= 26){
                answer += lower[lower.indexOf(arr[i]) + n - 26]
            }else{
                answer += lower[lower.indexOf(arr[i]) + n];
            }
        }else{
            answer+= " ";
        }
    }
    return answer;
}