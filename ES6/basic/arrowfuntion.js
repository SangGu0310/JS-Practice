

// arrow function


// callback 함수
setTimeout( () =>{
    console.log("settimeout arrow");
},1000);

let newArr = [1,2,3,4,5].map( (v) => (v * 2));

console.log(newArr);

// const myObj = {
//     runTimeout() {
//         setTimeout(function(){
//             this.printData(); // 여기서 this는 window를 가리키기때문에 bind를사용해 myObj을 가리키게 만든다
//         }.bind(this),200);
//     },

//     printData(){
//         console.log("hi codesquad!");
//     }
// }

const myObj1 = {
    runTimeout() {
        setTimeout( () => { //arrow를 사용하면 bind를 사용할필요가없네요
            this.printData(); 
        },200);
    },

    printData(){
        console.log("hi codesquad!");
    }
}

myObj1.runTimeout();


const el = document.querySelector("p");

const myObj = {
    register(){
        el.addEventListener("click", (evt) => {
            this.printData(evt.target);
        });
    },
    
    printData(el){
        console.log("clicked!!",el.innerText);
    }
}

myObj.register();


// defalut parameters

function sum(value,size=1){
    return value * size;
}

 // 3,10 이렇게 주면 30으로 값이 반환이된다
 console.log(sum(3));

 // obj형태도 가능하다
 function sum(value,size={value:1}){
    return value * size.value;
}
 console.log(sum(3,{value:3}))


 // rest parameters

 function checkNum(...argArray){ // 알아서 배열로 받아준다
     console.log(toString.call(argArray));
     const result = argArray.every((v) => typeof v === "number") // 배열안에있는 값들이 전부 number인가?
     console.log(result);
 }

 const result = checkNum(10,2,3,4,5,"55");