const form = document.querySelector(".js-form"),
      input = form.querySelector("input"),
      greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
      SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS,text);
}

function handleSubmit(event){
    event.preventDefault(); //인풋에 작성하고enter누르는게막히네
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

// 유저이름이 있는가? input창을 나타내는겁니다
function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",handleSubmit);
}

// 유저이름 나타내기 input창을 없애는겁니다
function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadNmae(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
       askForName();
    }else{
        // he is 
        paintGreeting(currentUser);
    }
}

function init(){
    loadNmae();
}

init();