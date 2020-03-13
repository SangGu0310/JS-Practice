

// lotto번호 마들기

// set과 destructuring이용

const setting = {
    name : "lucky lotto!",
    count : 6,
    maxnumber : 45
}

function getRandomNumber({count,maxnumber}){
    const lotset = new Set();
    for(let i = 0; i<count; i++){
        const lotNum = parseInt((Math.random() * maxnumber +1));
        lotset.add(lotNum);
    }
    return Array.from(lotset);
}

console.log(getRandomNumber(setting));

