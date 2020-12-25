const particleArray = [];
class Particle{
    constructor(){
        this.x = bird.x;
        this.y = bird.y;
        this.size = (Math.random() * 10) + 3;
        this.speedy = (Math.random() * 1) - 0.5; 
        this.color = 'hsla(' + hue + ' ,100%, 50%, 0.8)';
    }
    update(){
        this.x -= gamespeed;
        this.y += this.speedy;
    }
    draw(){
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI*2); 
        ctx.fill();
    }
}

function handleParticle(){
    particleArray.unshift(new Particle);
    for(let i = 0; i<particleArray.length; i++){
        particleArray[i].update();
        particleArray[i].draw();
    }
    if(particleArray.length>200){
        for(let i = 0; i<20; i++){
            particleArray.pop(particleArray[i]);
        }
    }
}