function solution(s) {
    var arr = s.split(" ");
    
    for(let i=0; i<arr.length; i++){
        arr[i] = arr[i].split("");
        for(let j=0; j<arr[i].length; j++){
           if(j%2==0){
               arr[i][j] = arr[i][j].toUpperCase();
            }else{
                arr[i][j] = arr[i][j].toLowerCase();
            } 
        }
        arr[i]=arr[i].join("");
    }
    return arr.join(" ");
}

