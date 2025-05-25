function solution(cards1, cards2, goal) {
    var answer = [];
    
    for(let cur of goal){
        if(cards1[0] == cur){
            cards1.shift();
        }else if(cards2[0] == cur){
            cards2.shift();
        }else{
            return "No";
        }
    }
    
    return "Yes";
}