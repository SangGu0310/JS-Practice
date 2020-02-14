
function getObj(){
    const name = "crong";

    const getName= function(){
        return name;
    }

    const setName = function(newName){
        name = newName;
    }

    const printName = function(){
        console.log(name);
    }

    return {getName,setName,printName}
}

let obj = getObj();
obj.printName();

const person ={
    name : "김민균",
    age : "28"
}
console.log(person)