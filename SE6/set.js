

let mySet = new Set();

// set : 중복없이 유일한 값을 저장하려고 할때. 이미 존재하는지 체크
mySet.add("crong");
mySet.add("hary");
mySet.add("crong");

console.log(mySet.has("crong"))

mySet.forEach(function(v){
    console.log(v);
    // 중복되어있는 값을 제외하고 출력해준다.
})