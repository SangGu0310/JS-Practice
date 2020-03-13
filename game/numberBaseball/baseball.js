
const body = document.querySelector("body");
let result = document.createElement("h1");
const form = document.createElement("form");
const input = document.createElement("input");
input.type = "text";
input.maxLength = 4;
const btn = document.createElement("button");
btn.textContent = "입력";

body.append(result,form);
form.append(input,btn);

let num = [];

function mix(){
    const arr = [1,2,3,4,5,6,7,8,9];
    num=[];
    // splice는 배열로 빼온다
    for(let i =0; i<4; i++){
        let q = arr.splice(Math.floor(Math.random()*(9-i)),1)[0];
        num.push(q);
    }
}

mix();
console.log(num)


form.addEventListener("submit",function(e){
    e.preventDefault();
    if(num.join("") === input.value){
        console.log("홈런");
        mix();
        console.log(num)
    } else{
        let strike = 0;
        let ball = 0;
        for(let i =0; i<4; i++){
            if(num.join("")[i] === input.value[0]){
                strike++;
            }
        }
    }
});