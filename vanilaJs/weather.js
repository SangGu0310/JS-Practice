const COORDS = 'coords';

function saveCoords(coordsObj){

}
// 좌표를 성공적으로 가져왔을때 실행되는 핸들
function handleGeoSuccess(position){
    const latitude = position.coords.latitude; // 위도
    const longitude = position.coords.longitude; // 경도
    const coordsObj = {
        latitude, // latitude == 위에 선언한 latitud 와 같다
        longitude
    };
}

// 좌표를 못가져올때 실행되는 핸들
function handleGeoError(){
    console.log("error");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError);
}

function loadCoords(){
    const loadedCords = localStorage.getItem(COORDS);
    if(loadedCords === null){
        askForCoords(); //좌표요청
    } else{
        //getWeather
    }

}



function init(){
    loadCoords();
}

init();