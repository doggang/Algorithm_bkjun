function solution(n, m) {

    var answer = [];
    
    var nbig = [];
    var mbig = [];

    var nsml = [];
    var msml = [];

    
    
    var flag = false;
    if(n==m){
        answer.push(n,m);
    }else{
        
        for(let i=1; i<=n; i++){
            if(n%i==0){
                nbig.push(i);
            }
        }

        for(let i=1; i<=m; i++){
            if(m%i==0){
                mbig.push(i);
            }
        }
        
        nbig = nbig.sort((a,b)=>b-a);
        
        for(let i=0; i<nbig.length; i++){
            for(let j=0; j<mbig.length; j++){
                if(nbig[i] == mbig[j]){
                    answer.push(nbig[i]);
                    flag = true;
                    break;
                }
            }
            if(flag){
                break;
            }
        }
    
        answer.push((n*m)/answer[0]);
    }
    
    return answer;
}