class Bird{
    constructor(){
        this.x = 150;
        this.y = 200;
        this.vy = 0;
        this.width = 20;
        this.height = 20;
        this.weight = 1;
    }
    update(){
        let curve = Math.sin(angle)*20;
        if(this.y > canvas.height - (this.height*2) + curve){
            this.y = canvas.height - (this.height*2) + curve;
            this.vy = 0;
        }
        else if(this.y < 0 + this.height){
            this.y = this.height;
            this.vy = 0;
        }
        else{
        this.vy = this.vy + this.weight;
        this.vy = this.vy*0.7;
        this.y = this.y + this.vy;
        }
        if(spacePress == true){
            this.flap();
        }
    }
    draw(){
        ctx.fillStyle = 'blue';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    flap(){
        this.vy = this.vy - 2 ;        
    }
}

const bird = new Bird();