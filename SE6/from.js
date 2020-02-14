
// from 메서드로 진짜 배열만들기
// map은 array일때 사용이가능해서 array를 만들어주고 사용
function addMark(){
    let newArray = Array.from(arguments);
    let newData = newArray.map(function(value){
        return value + "!";
    });
    console.log(newData);
}

addMark(1,2,3,4,5);

//filter, includes, from을 사용해서 문자열'e'가 포함된 노드로 구성된 배열을 만들어서 반환
function print() {
    let list = document.querySelectorAll("li");
    let newArray = Array.from(list);
    let eArray = newArray.filter(function(v){
        return v.innerText.includes("e");
    });
    return eArray;
}
console.log(print());
let cc = [];
for(let c of print()){
    cc.push(c.innerText);
}
addMark(...cc);
// console.log(print());
// console.log(print()[0].innerText); 태그제외해서 뽑기