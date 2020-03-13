
// json으로 응답을 받고,
// javascript object로 변환한 후에 데이터처리 조작을 한 후에 dom에 추가!
// 데이터 + HTML문자열의 결합이 필요하기 때문에
const data = [
    {
        name : 'coffe-bean',
        order : true,
        items : ['americano', 'milk', 'green-tea']
    },
    {
        name : 'starbuks',
        order : false,
    },
    {
        name : 'coffe-king',
        order : true,
        items : ['americano','latte']
    }
    
]

// Tagged template literals
// function fn(tags, name, items){
//     if(typeof items === "undefined"){
//         items = "주문가능한 상품이 없습니다.";
//     }
// }
function fn(tags, name, items){
    if(typeof items === "undefined"){
        items = "<span style = 'color:red'>주문가능한 상품이 없습니다.</span>";
    }
    return (tags[0]+name+tags[1]+items+tags[2]);
}

data.forEach((v) => {
    let template = fn`<h2>welcome ${v.name}!!<h2>
                  <h4>주문가능항목</h4>
                  <div>${v.items}</div>`;
    document.querySelector("#message").innerHTML += template;
});
// const template = fn`<div>welcome ${data[1].name}!!<div>
//                   <h2>주문가능항목</h2>
//                   <div>${data[1].items}</div>
// `;
// console.log(template);