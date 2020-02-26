

let mySet = new Set();

// set : 중복없이 유일한 값을 저장하려고 할때. 이미 존재하는지 체크
mySet.add("crong");
mySet.add("hary");
mySet.add("crong");


// set에 crong이 있니?
console.log(mySet.has("crong"))

mySet.forEach(function(v){
    console.log(v);
    // 중복되어있는 값을 제외하고 출력해준다.
})
mySet.delete("crong");

mySet.forEach(function(v){
    console.log(v);
    // 중복되어있는 값을 제외하고 출력해준다.
})

// weakset
// 참조를 가지고 있는 객체만 저장이 가능하다.
// 객체형태를 중복없이 저장하려고 할때 유용하다
let arr = [1,2,3,4,5];
let arr2 = [5,6,7,8];
let obj = {arr,arr2};
let ws = new WeakSet();

ws.add(arr);
ws.add(arr2);
ws.add(obj);
arr = null; // arr에 null을 집어넣어도 ws는 존재하는 거 처럼 보인다
//ws.add(function(){}); //가능
//ws.add(111); 전부 invalid value
//ws.add("111");
//ws.add(null);

console.log(ws);
// has를 찍어보면 arr 은 false로 나타남
console.log(ws.has(arr),ws.has(arr2));
