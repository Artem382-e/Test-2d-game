const canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let picBackground = new Image();
    picBackground.src = "./pic/background.jpg";

    let picPlayer = new Image();
    picPlayer.src = "./pic/player.png";

    picEnemy = new Image();
    picEnemy.src = "./pic/Enemy.png";

ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

function draw(){
    ctx.drawImage(picBackground, 0, 0, window.innerWidth, window.innerHeight);
    ctx.drawImage(picPlayer, 30, 710, picPlayer.width/20, picPlayer.height/20);
    ctx.drawImage(picEnemy, 800, 730, picEnemy.width/10, picEnemy.height/10);
}

picPlayer.onload = picBackground.onload = draw;