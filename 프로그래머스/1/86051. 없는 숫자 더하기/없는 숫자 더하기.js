function solution(numbers) {
    const arr = [0,1,2,3,4,5,6,7,8,9];
    return arr.filter((item)=>!numbers.includes(item)).reduce((acc,cur)=> acc+=cur);
}