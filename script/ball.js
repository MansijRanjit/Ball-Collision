class Ball{
  constructor (xAxis,yAxis,color,radius){
    this.xAxis=xAxis;
    this.yAxis=yAxis;
    this.color=color;
    this.radius=radius;

    this.element=document.createElement("div");
    this.element.className="ball";
    this.moveX=getRandomNumber(-1,1);
    this.moveY=getRandomNumber(-1,1);
  }

   getElement(){
    return this.element;
   }

   draw(){
    this.element.style.background =this.color;
    this.element.style.width= `${this.radius *2} px`;
    this.element.style.height=`${this.radius*2}px`;
    this.element.style.top=`${this.yAxis}px`;
    this.element.style.left=`${this.xAxis}px`;
   }

   move(){
    this.xAxis += this.moveX *SPEED; //changing position
    this.yAxis +=this.moveY*SPEED;
   }


   checkWallCollision() {
        if (this.xAxis + this.radius * 2 > V_WIDTH) {
            this.xAxis = V_WIDTH - this.radius * 2;
            this.moveX = -this.moveX
        }
        if (this.xAxis < 0) {
            this.xAxis = 0;
            this.moveX = -this.moveX;
        }
        if (this.yAxis < 0) {
            this.yAxis = 0;
            this.moveY = -this.moveY;
        }
        if (this.yAxis + this.radius * 2 > V_HEIGHT) {
            this.yAxis = V_HEIGHT - this.radius * 2;
            this.moveY = -this.moveY;
        }
    }
    
    checkBallCollision(balls) {
        for(const ball of balls){
            if (ball == this) return; //check if ball is current ball
            else {
                const dx = this.xAxis - ball.xAxis;
                const dy = this.yAxis - ball.yAxis;
                
                const distance =calcDistance(ball.xAxis,ball.yAxis,this.xAxis,this.yAxis);
                console.log(distance);

                if (distance < this.radius + ball.radius) {
                    const angle = Math.atan2(dy, dx);
                    const sin = Math.sin(angle);
                    const cos = Math.cos(angle);

                    const thisMoveX = this.moveX * cos + this.moveY * sin;
                    const thisMoveY = this.moveY * cos - this.moveX * sin;
                    const ballMoveX = ball.moveX * cos + ball.moveY * sin;
                    const ballMoveY = ball.moveY * cos - ball.moveX * sin;

                    // Swap velocities
                    this.moveX = ballMoveX;
                    this.moveY = ballMoveY;
                    ball.moveX = thisMoveX;
                    ball.moveY = thisMoveY;

                    // avoid sticking
                    const overlap = this.radius + ball.radius - distance + 1;
                    this.xAxis += overlap * cos;
                    this.yAxis += overlap * sin;
                }
            }
        }
    }

}