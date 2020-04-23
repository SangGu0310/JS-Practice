
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

let arr;
let num;

function mix(){
    arr = [1,2,3,4,5,6,7,8,9];
    num = [];
    // splice는 배열로 빼온다
    for(let i =0; i<4; i++){
        let q = arr.splice(Math.floor(Math.random()*(9-i)),1)[0];
        num.push(q);
    }
    console.log(num)
}

mix();


let fail = 0;

form.addEventListener("submit",function(e){
    e.preventDefault();
    //맞음
    if(num.join("") === input.value){
        console.log("홈런");
        mix();
        input.value = '';
        input.focus();
        fail=0;
    }
    //틀림
     else{
         console.log(input.value)
        console.log(input.value.split(""))
        let inputArr = input.value.split("");
        let strike = 0;
        let ball = 0;
        fail++;
        if(fail >10){
            result.textContent = `10번 넘게 틀려서 실패 답은 ${num.join("")}였습니다`;
            input.value = '';
            input.focus();
            mix();
            fail =0;
        }else{
            for(let i =0; i<4; i++){
                if(num[i] === Number(inputArr[i])){
                    strike++;
                }else if(num.indexOf(Number(inputArr[i])) > -1){
                    ball++;
                }
            }
            input.value = '';
            input.focus();
            result.textContent = `스트라이크${strike}개 볼${ball}개`;
        }
    }
});