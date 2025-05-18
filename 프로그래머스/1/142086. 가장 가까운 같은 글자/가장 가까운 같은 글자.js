function solution(s) {
    var answer = [];
    var n =[];
    var arr = s.split("");
    arr.forEach((cur,idx)=>{
        if(!answer.includes(cur)){
            answer.push(cur);
            n.push(-1);
        }else{
            var i = 0;
            var sliceArr = arr.slice(0,idx);
            for(let j=0; j<sliceArr.length; j++){
                if(cur == sliceArr[j]){
                    i=j;
                }
            }
          n.push(idx-i);  
        }
    })
    return n;
}