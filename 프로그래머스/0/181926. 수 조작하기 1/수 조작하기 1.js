function solution(n, control) {
        var a = n;
        for(let i=0; i<control.length; i++){
            switch(control[i]){
            case "w" : a+= 1; break;
            case "s" : a+= -1; break;
            case "d" : a+= 10; break;
            case "a" : a+= -10; break;
        }
    }
    return a;
}