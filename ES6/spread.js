
//spread operator, 펼침연산자 ...

function sum(a,b,c){
    return a+b+c;
}

let pre = [100,200,300];

console.log(sum.apply(null,pre));
console.log(sum(...pre));