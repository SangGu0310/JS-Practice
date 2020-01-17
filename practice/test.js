//변수(예약어)의 타입

// for(var i =0; i<5; i++ ){
//     console.log('for문 안',i);
// }

// console.log('for문 밖',i);

//이렇게하면 for문 밖에서도 i값이 살아남음
// let으로 적용하면 밖에서 안살아남네

// const test = "안녕하세여";
// console.log(test);

// test = "반갑습니다";
// console.log(test);

//함수 종류
// 무명함수 기명함수(이름이 있는 함수), + 화살표함수
//기명함수는 앞뒤에 선언해도 상관없고 무명함수는 함수 뒤에 콜을해야함

// function test1(){
//     console.log("안녕하세요");
// }
// test1();

// let test2 = function(){
//     console.log("반갑습니다");
// };

//함수의 리턴타입
//자바스크립트의 데이터타입

//String number boolean object
//NaN, undefiend , null
// trudy, falsy 

// let username = '홍길동';
// if(!username){
//     console.log('값이없다');
// }else{
//     console.log('값이있다')
// }

//falsy한 값의 종류
// undefined, "", 0, NaN, null

// 비교연산자 ==, !=, 느슨한체킹
// ===, !==  엄격한 체킹

// let test =1;
// let test2 = '1';

// console.log(test === test2)


//템플릿 리터럴(백틱)
// let name = "홍길동";
// let age = 29;

// let template = ``;
// console.log('제 이름은'+name+'이거, 나이는'+age+'입니다');
// console.log(`제 이름은 ${name}이고, 나이는 ${age}입니다`);

let customDiv = `
    <div>
        <h1>타이틀</h1>
        <p>안녕하세여<p>
    </div>
`;

function testTemplate(title,description){
    retrun `
    <div>
        <h1>${title}</h1>
        <p>${description}<p>
    </div>
    `
};

//구조 분해할당

let list = [1,2,3,4,5];
let [a,b,c,d,e] = list;

function test(){
    return [a,b];
}

console.log(test());


let obj = {
    name : '홍길동',
    age : 29,
    aa : '나의학생',
    friend : {
        name : '홍길순',
        age : 28,
        aa : '홍길동의 친구',
        key : '1123123'
    }
};

let {name,age,aa,friend:{key}} = obj;

console.log(name,age,aa,key);