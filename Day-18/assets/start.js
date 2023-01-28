class Start extends Phaser.Scene
{
    constructor()
    {
        super('Start');
    }
    preload(){
        this.load.image('bg','assets/BG.png');
        this.load.image('ball','assets/ball.png');
        this.load.image('star', 'assets/star.png');
    }
    create()
    {
        this.background = this.add.image(700,400,'bg').setScale(2.2,1.4);
        this.text1 = this.add.text(500, 300, 'Bounce', { fontSize: '100px', fill: '#000',fontFamily: 'cursive'});
        this.background.setInteractive();
        this.background.visible=true;
        this.background.on('pointerdown',()=>{this.scene.switch('Menu')});
        ball=this.physics.add.sprite(300,300,'ball').setScale(0.06);
        ball.setCollideWorldBounds(true);
        ball.setBounce(1);
        star = this.physics.add.image(1000,0,'star').setScale(3);
        star.setCollideWorldBounds(true);
        star.setBounce(1);
    }
}
