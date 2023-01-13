var score = 0;
var ball;

function preload(){
    this.load.image('bk','assets/Background_2.png');
    this.load.image('block', 'assets/block.png');
    this.load.image('ball','assets/ball.png')
    this.load.image('star', 'assets/star.png');
}
function create(){
    this.add.image(500,400,'bk');
    platforms = this.physics.add.staticGroup();
    platforms.create(0, 800, 'block').setScale(12,0.2).refreshBody();
    platforms.create(1200, 600, 'block').setScale(0.3,0.03).refreshBody();
    platforms.create(0, 400, 'block').setScale(0.3,0.03).refreshBody();
    platforms.create(680, 500, 'block').setScale(0.2,0.03).refreshBody();
    platforms.create(1100, 400, 'block').setScale(0.1,0.03).refreshBody();
    platforms.create(700, 300, 'block').setScale(0.15,0.03).refreshBody();
    ball=this.physics.add.sprite(100,500,'ball').setScale(0.04);
    ball.setCollideWorldBounds(true);
    this.physics.add.collider(ball, platforms);
    cursors = this.input.keyboard.createCursorKeys();
    star = this.physics.add.image(100,0,'star').setScale(3);
    this.physics.add.collider(star, platforms);
    scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
    this.physics.add.overlap(ball, star, collectStar, null, this);
}
function update(){
    if (cursors.right.isDown){
        ball.setVelocityX(160);
    }
    else if (cursors.left.isDown){
        ball.setVelocityX(-160);
    }
    else
    {
        ball.setVelocityX(0);
    }
    if (ball.body.touching.down)
    {
        ball.setVelocityY(-350);
    }
}
function collectStar (ball, star)
{
    star.disableBody(true, true);
    score += 10;
    scoreText.setText('Score: ' + score);
}
var config={
    type:Phaser.AUTO,
    width: 1400,
    height: 800,
    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};
var game = new Phaser.Game(config);