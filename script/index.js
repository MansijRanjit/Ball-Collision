const viewport = document.querySelector('.viewport') || document.body;
const balls=[];

viewport.style.height=`${V_HEIGHT}px`;
viewport.style.width=`${V_WIDTH}px`;

for(let i=0;i<BALL_COUNT;i++){
    const color=getRandomColor();
    const radius =getRandomNumber(10,20);
    let diameter=radius*2;
    const randomX = getRandomNumber(0,V_WIDTH - diameter);
    const randomY = getRandomNumber(0, V_HEIGHT - diameter);

    let ball=new Ball(randomX,randomY,color,radius);
    balls.push(ball);
    //console.log(ball.getElement());
    viewport.appendChild(ball.getElement());
}


function render(){
    balls.forEach((ball) => {
        ball.draw();
        ball.move();
        ball.checkWallCollision();
        ball.checkBallCollision(balls);

    })
    requestAnimationFrame(render)
}

render()