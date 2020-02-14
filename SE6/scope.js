/*
var는 크게 함수 블럭단위로 사용가능
let은 내가 사용한 { } 블럭단위에서 사용
const는 알다시피 상수

변수선언할 때 const를 기본으로 사용한다.
그런데 변경이 될 수 있는 변수는 let을 사용
var는 사용하지않는다
const를 사용하더라도 배열과 오브젝트의 값을 변경하는것은 가능하다
*/

//immutable array
// 기준이되는 배열은 놔두고 기준을 가지고 새로운객체 생성
const list = ["apple","orange","watermelon"];
const list2 = [].concat(list,"banana");
console.log(list,list2);

// ES6 String에 새로운 매서드 true or false
let str = "hello world ! ^^ ~~";
let matchstr1 = "hello";
let matchstr2 = "^ ~~";
//str앞에서부터 판별해서 이게있니?
console.log(str.startsWith(matchstr1));
//str뒤에서부터 역으로 판별해서 이게있나?
console.log(str.endsWith(matchstr2));
// str에 이게 포함되어있니?
console.log(str.includes("world"));
