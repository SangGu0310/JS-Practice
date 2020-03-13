

// ES6 Class
function Health(name){
    this.name = name;
}

Health.prototype.showHealth = function()  {
    console.log(this.name + "님 안녕하세여");
}

const h = new Health("crong");
h.showHealth();


// class Health{ // 모양은 class처럼보이지만 function prototype으로 연결되어있는거다 
//     constructor(name,lastTime){
//         this.name = name;
//         this.lastTime = lastTime;
//     }

//     showHealth(){
//         console.log("안녕하세요" + this.name);
//     }
// }

// const myHealth = new Health("crong");

// myHealth.showHealth();
// console.log(toString.call(Health)) // 찍어보면 function으로 나온다

/*----------------------------------------------------------------------------------*/ 
// Object assign 메서드.
// const healthObj = {
//     showHealth : function() {
//         console.log("오늘 운동시간 : "+ this.healthTime);
//     }
// }

// const myHealth = Object.assign(Object.create(healthObj),{
//     healthTime : "11:20",
//     name : "crong"    
// });

// console.log(myHealth);

// const previousObj = {
//     name : "crong",
//     lastTime : "11 : 20"
// };

// // 기존 Object값을 추출하고 새로운 값이 있으면 대체한다
// const myHealth = Object.assign({}, previousObj, {
//     "lastTime" : "12:30",
//     "name" : "honux",
//     "age" : 100
// });

// console.log("myHealth is", myHealth);
//console.log(previousObj === myHealth) false

/*--------------------------------------------------------------------------------*/

// setPrototypeOf
// const healthObj = {
//     showHealth : function(){
//         console.log("오늘 운동시간 : " + this.healthTime);
//     },
//     setHealth : function(newTime){
//         this.healthTime = newTime;
//     }
// };

// 기존 Object값을 추출하고 새로운 값이 있으면 대체한다
// const newObj = Object.setPrototypeOf({
//     name : "crong",
//     lastTime : "11:20"
// }, healthObj);

// console.log("newObj is", newObj);

// prototype chain 생성 일종의 상속
// parent
const healthObj = {
    showHealth : function(){
        console.log("오늘 운동시간 : " + this.healthTime);
    },
    setHealth : function(newTime){
        this.healthTime = newTime;
    }
};

// child obj
const healthChildObj = {
    getAge : function(){
        return this.age;
    }
}

const lastHeathobj = Object.setPrototypeOf(healthChildObj,healthObj);

const childObj = Object.setPrototypeOf({
    age : 22
}, healthChildObj);

childObj.setHealth("11:55");
childObj.showHealth();
console.log("childobj is", childObj);