class LVL1 extends Phaser.Scene
{
    constructor()
    {
        super('LVL1');
    }
    preload()
    {
        this.load.image('bk','assets/Background_2.png');
        this.load.image('block', 'assets/block.png');
        this.load.image('ball','assets/ball.png');
        this.load.image('star', 'assets/star.png');
        this.load.image('goal','assets/goal.png');
        this.load.spritesheet('pause', 'assets/play.png',{ frameWidth: 420, frameHeight: 450 });
    }
    update()
    {
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
    create()
    {
        lvl=1;
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
        this.physics.add.overlap(ball, star, this.collectStar, null, this);
        pause=this.add.sprite(1350,50,'pause',1).setScale(0.18);
        pause.setInteractive();
        pause.visible=true;
        pause.on('pointerdown',()=>this.onPause());
    }
    collectStar (ball, star)
    {
        star.disableBody(true, true);
        score += 10;
        scoreText.setText('Score: ' + score);
        goal=this.physics.add.image(1100,470,'goal').setScale(0.3);
        this.physics.add.collider(goal, platforms);
        this.physics.add.overlap(ball, goal, this.onGoal, null, this);
    }
    onGoal(ball,goal)
    {
        goal.disableBody(true, true);
        score+=100;
        scoreText.setText('Score: ' + score);
        this.scene.switch('LVLComplete');
    }
    onPause(){
        this.scene.pause();
        this.scene.launch('PauseMenu');
    }
}
