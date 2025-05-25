function solution(n, arr1, arr2) {
    var arr = Array.from({length:n}, ()=>Array(n).fill(0));
    var arrFirst = [];
    var arrSecond = [];
    
        for(let i=0; i<n; i++){
            arrFirst.push(arr1[i].toString(2));
            arrSecond.push(arr2[i].toString(2));
            arrFirst[i] = arrFirst[i].split("").map(Number);
            arrSecond[i] = arrSecond[i].split("").map(Number);

            while(arrFirst[i].length!==n){
                arrFirst[i].unshift(0);
            }
            while(arrSecond[i].length!==n){
                arrSecond[i].unshift(0);
            }
        }
    
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            if(arrFirst[i][j]+arrSecond[i][j] !== 0){
                arr[i][j] = "#";
            }else{
                arr[i][j] = " ";
            }
        }
        arr[i] = arr[i].join("");
    }

    return arr;
}
