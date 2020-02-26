
let people = ["crong","honux","jk","jinny"];
let [jisu,,jung] = people;
console.log(jisu,jung); //변수에 값을 대입할때 쉽게할수있다.

let obj = {
    name : "crong",
    address : "Korea",
    age : 10
}

//해당 key값을 뽑아온다
let{name,age} = obj;
console.log(name,age)

let {name:myName,age:myAge} = obj;
console.log(myName,myAge)


//Destructuring을 활용해 JSON파싱 aJax사용할때 굿
var news = [
    {
        title : "sbs",
        imgurl : "456.jpg",
        newslist : ["음머어","소야소","4인분"]
    },
    {
        title : "mbc",
        imgurl : "1234.jpg",
        newslist : ["코로나","우한","언제끝날까요"]
    }
];

let [,{title,imgurl}] = news;
console.log(imgurl)

// function에서도 사용가능
function getNewlist([,{newslist}]){
    console.log(newslist);
}
getNewlist(news);

// addEventListener도 destructuring가능
document.querySelector("div").addEventListener("click",function({target}){
    console.log(target.innerText);
})