
/* for in을 사용할때 prototype객체에 무언가가 추가되면 그것까지 출력되는게 문제
   for in은 array에서 사용하는게 아니다
*/
const data = ["!","@","#","$"];
for(let idx in data){
    console.log(data[idx]);
}
/*
    이러한 문제로 for of가 나왔다
    String같은 경우는 char형으로 뽑아서 출력
*/
for(let value of data){
    console.log(value);
}

let test = "String String"
for(let v of test){
    console.log(v);
}