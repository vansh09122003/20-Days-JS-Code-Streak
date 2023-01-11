function preload(){
    this.load.image('bk','assets/Background_2.png');
    this.load.image('block', 'assets/block.png');
    this.load.image('ball','assets/ball.png')
}
function create(){
    this.add.image(500,400,'bk');
    platforms = this.physics.add.staticGroup();
    platforms.create(0, 1200, 'block').setScale(1).refreshBody();
    ball=this.physics.add.sprite(0,100,'ball').setScale(0.1);
    ball.setBounce(1);
    ball.setCollideWorldBounds(true);
    this.physics.add.collider(ball, platforms);
    cursors = this.input.keyboard.createCursorKeys();
}
function update(){
    if (cursors.right.isDown){
        ball.setVelocityX(160);
    }
    if (cursors.left.isDown){
        ball.setVelocityX(-160);
    }
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