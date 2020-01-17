// const info = {
//     name : 'kim',
//     age : 20,
//     gender : "male",
//     address : "Sanboncheonro 12 "
// }
// console.log(info)


// const calculator  = {
//     plus : function(a,b){
//         return a+b;
//     }
// }

// const plus = calculator.plus(5,5)
// console.log(plus)

// const title = document.querySelector("#title");
const title = document.getElementById("title")

const CLICKED_CLASS = "clicked";

function handleClick(){
    // const currentClass = title.className;
    //const hasClass = title.classList.contains(CLICKED_CLASS); // true or false를 반환
    title.classList.toggle(CLICKED_CLASS);
    //class가있으면 add 아니면 remove를 알아서해줘
}
// title.innerHTML = "으아아아아";
// title.style.color = "red";
// document.title = "I own you now";

// const BASE_COLOR = "rgb(52, 73, 94)";
// const OTHER_COLOR = "#7f8c8d";

// function handleClick(){
//     const currentColor = title.style.color;
//     if(currentColor === BASE_COLOR){
//         title.style.color = OTHER_COLOR;
//     }
//     else{
//         title.style.color = BASE_COLOR;
//     }
// }

function init(){
    // title.style.color = BASE_COLOR;
    // title.style.cursor = "pointer";
    title.addEventListener("click", handleClick);
}

init();

//우리 와이파이 상태를 알아듣고있네
// function handleOffline(){
//     console.log("Bye bye");
// }

// function handleOnline(){
//     console.log("welcome back")
// }
// window.addEventListener("offline",handleOffline);
// window.addEventListener("online",handleOnline);
// const age = prompt("How old are you");
// console.log(age);