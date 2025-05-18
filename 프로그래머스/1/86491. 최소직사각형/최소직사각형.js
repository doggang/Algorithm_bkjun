function solution(sizes) {
    var answer = 0;
    var max = 0;
    var idx = 0;
    var detailIdx = 0;
    
    for(let i=0; i<sizes.length; i++){
        if(max < Math.max(...sizes[i])){
            max = Math.max(...sizes[i]);
            idx = i;
            detailIdx = sizes[idx].indexOf(max)==0 ? 1 : 0;
        }
    }
    
    var min = sizes[idx][detailIdx];
    for(let i=0; i<sizes.length; i++){
        if( min < Math.min(...sizes[i])){
            min = Math.min(...sizes[i]);
        }
    }
    
    return max*min;
}