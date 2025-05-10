function solution(a, b, c, d) {
    var answer = 0;
    if(a==b && a==c && a==d){
        answer = 1111*a;
    }else if(((a==b&&b==c)&&a!==d) || ((a==b&&b==d)&&a!==c) || ((a==c&&c==d)&&a!==b) || ((b==c&&c==d)&&a!==b)){
        if(a==b && b==c){
            answer = (10*a+d)*(10*a+d);
        }else if(a==c && c==d){
            answer = (10*a+b)*(10*a+b);
        }else if(a==b && b==d){
            answer = (10*a+c)*(10*a+c);
        }else if(b==c && c==d){
            answer = (10*d+a)*(10*d+a);
        }
    }else if( (a==b && c==d) || (a==c && b==d) || (a==d && b==c)){
        var arr = [a,b,c,d];
        arr = [...new Set(arr)];
        answer = (arr[0] +arr[1]) * Math.abs(arr[0] - arr[1]);
    }else if(a==b || a==c || a==d || b==c || b==d || c==d){
        if(a==b){
            answer = c*d;
        }else if(a==c){
            answer = b*d;
        }else if(a==d){
            answer = c*b;
        }else if(b==c){
            answer = a*d;
        }else if(b==d){
            answer = a*c;
        }else if(c==d){
            answer = a*b;
        }
    }else{
        var arr = [a,b,c,d];
        answer = Math.min(...arr);
    }
    return answer;
}

// 4개 주사위가 p로 같다면 1111*p
// 3개 주사위가 p로 같고, 나머지 하나가 q라면 (10*p+q)*(10*p+q)
// 2개 주사위씩 각각 같고, 나온 숫자가 각각 p, z면 (p+q) * Math.abs(p-q)
// 2개 주사위가 p로 같고, 나머지 주사위가 q, r이면 q * r
// 모든 주사위가 다르면 가장 작은 숫자 획득
