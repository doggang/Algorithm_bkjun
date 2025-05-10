function solution(arr, queries) {
    var ans = [];

    for(let [s,e,k] of queries){
        const sub = arr.slice(s,e+1).filter((item)=>item > k);
        if(sub.length === 0 ){
            ans.push(-1);
        }else{
            ans.push(Math.min(...sub));
        }
    }
    
    return ans;
}