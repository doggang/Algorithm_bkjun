function solution(a, b, c) {
    var answer = 0;
    if(a!==b && b!==c && a!==c){
        return a+b+c;
    }else if((a==b && a!==c) || (a==c && a!==b) || (b==c && a!==b)){
        return (a+b+c)*(a*a + b*b + c*c);
    }else{
        return (a+b+c)*(a*a+b*b+c*c)*(a*a*a + b*b*b + c*c*c);
    }
}