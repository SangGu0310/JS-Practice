
// map & WeakMap
// Array -> set, weakset
// Object -> map, weakmap

// map은 key / value

let wm  = new WeakMap();
let myfun = function(){};
// 이 함수가 얼마나 실행됐지?를 알려고 할때.

wm.set(myfun,0);
console.log(wm);

let count = 0;
for(let i=0; i<10; i++){
    count = wm.get(myfun); // get value
    count++;
    wm.set(myfun,count);
}

console.log(wm.get(myfun));
myfun = null;
console.log(wm.get(myfun));

// weakMap 활용
const wm2 = new WeakMap();

function Area2(height,width){
    wm2.set(this, {height, width});
}

Area2.prototype.getArea2 = function(){
    const {height,width} = wm2.get(this)
    return height * width;
}

function Area(height,width){
    this.height = height;
    this.width = width;
}

Area.prototype.getArea = function(){
    return this.height * this.width;
}

let myarea = new Area2(10,20);
console.log(myarea.getArea2());