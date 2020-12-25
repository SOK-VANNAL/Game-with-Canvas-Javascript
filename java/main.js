const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.height = 400;
canvas.width = 600;
console.log(canvas);

let spacePress = false;
let angle = 0;
let frame = 0;
let hue = 0;
let score = 0;
let gamespeed = 2;
let position = canvas.height-225;

function animate(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    // ctx.fillRect(10, position, 50, 50);
    handleObstacles();
    bird.update();
    bird.draw();
    ctx.fillStyle = 'green';
    ctx.font = '80px Georgia';
    // ctx.strokeText(score, 450, 70);
    ctx.fillText(score,500,70);
    handleParticle();
    gameRule();
    if(gameRule()){
        return;
    }
    requestAnimationFrame(animate);
    angle = angle +0.15; 
    hue++;
    frame++;
}

animate();

window.addEventListener('keydown', function(event){
    console.log(event.code);
    if(event.code == "Space"){
        spacePress = true;
        position = position - 20;
    }  
})
window.addEventListener('keyup', function(event){
    if(event.code == "Space"){
        spacePress = false;   
    }
});

const bang = new Image();
bang.src = '../Image/bang.png';
function gameRule(){
    for(let i = 0; i<obstaclesArray.length; i++){
        if(bird.x < obstaclesArray[i].x + obstaclesArray[i].width && 
           bird.x + bird.width > obstaclesArray[i].x && ((bird.y < 0 +obstaclesArray[i].top && bird.y + bird.height > 0) || 
           (bird.y > canvas.height - obstaclesArray[i].bottom && bird.y + bird.height < canvas.height))){
               ctx.drawImage(bang, bird.x, bird.y-15, 50, 50);
               ctx.font = "25px Georgia";
               ctx.fillStyle = 'black';
               ctx.fillText('Game Over, your score is '+score, 160, canvas.height/2-10);
               return true;
           }
    }
}


