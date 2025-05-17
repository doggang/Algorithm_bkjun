function solution(d, budget) {
    const depm = d.sort((a,b)=>(a-b));
    var arr =[];
    var answer = depm.reduce((acc,cur,idx)=>{
        if(acc+cur<=budget){
            arr.push(cur);
            acc+=cur;
        }
        return acc;
    },0);
    
    return arr.length;
}