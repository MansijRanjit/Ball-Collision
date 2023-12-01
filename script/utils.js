function getRandomColor(){
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const rColor=`rgb(${red},${blue},${green})`;
    return rColor;
}
function getRandomNumber(min,max){
    return min + Math.random()*(max - min);
}


function calcDistance(x1,y1,x2,y2){
    const dx = x2-x1;
    const dy = y2-y1;
    return Math.sqrt(dx*dx + dy*dy);
}
