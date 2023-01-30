class LVL4 extends Phaser.Scene
{
    constructor()
    {
        super('LVL4');
    }
    preload()
    {
        this.load.image('bk','assets/Background_2.png');
        this.load.image('block', 'assets/block.png');
        this.load.image('ball','assets/ball.png');
        this.load.image('star', 'assets/star.png');
        this.load.image('goal','assets/goal.png');
        this.load.image('trigger','assets/button.png')
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
            bounceBgm.play();
        }
    }
    create()
    {
        lvl=4;
        starCount=0;
        this.add.image(500,400,'bk');
        platforms = this.physics.add.staticGroup();
        platforms.create(0, 800, 'block').setScale(12,0.2).refreshBody();
        ball=this.physics.add.sprite(100,500,'ball').setScale(0.04);
        ball.setCollideWorldBounds(true);
        this.physics.add.collider(ball, platforms);
        cursors = this.input.keyboard.createCursorKeys();
        scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
        platforms.create(0, 600, 'block').setScale(0.3,0.03).refreshBody();
        platforms.create(480, 500, 'block').setScale(0.2,0.03).refreshBody();
        platforms.create(400, 200, 'block').setScale(0.1,0.03).refreshBody();
        platforms.create(200, 300, 'block').setScale(0.15,0.03).refreshBody();
        platforms.create(1100, 350, 'block').setScale(0.2,0.03).refreshBody();
        this.trigger = this.physics.add.image(400,200,'trigger').setScale(0.2);
        this.trigger.setCollideWorldBounds(true);
        this.trigger.alpha=0;
        this.physics.add.collider(this.trigger, platforms);
        this.physics.add.overlap(ball, this.trigger, this.onTrigger, null, this);
        star = this.physics.add.image(400,0,'star').setScale(3);
        star.setCollideWorldBounds(true);
        this.physics.add.overlap(ball, star, this.collectStar, null, this);
        star.setBounce(0.3);
        this.physics.add.collider(star, platforms);
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
        starCount+=1;
        starBgm.play();
        if(starCount==2){
            goal=this.physics.add.image(100,470,'goal').setScale(0.3);
            this.physics.add.collider(goal, platforms);
            this.physics.add.overlap(ball, goal, this.onGoal, null, this);
        }
        else if(starCount==1){
            platforms.create(1200,200,'block').setScale(0.15,0.03).refreshBody();
            star = this.physics.add.image(1200,0,'star').setScale(3);
            this.physics.add.overlap(ball, star, this.collectStar, null, this);
            star.setBounce(0.5);
            star.setCollideWorldBounds(true);
            this.physics.add.collider(star, platforms);
            this.trigger = this.physics.add.image(1000,220,'trigger').setScale(0.2);
            this.trigger.setCollideWorldBounds(true);
            this.trigger.alpha=0;
            this.physics.add.collider(this.trigger, platforms);
            this.physics.add.overlap(ball, this.trigger, this.onTrigger, null, this);
        }
    }
    onGoal(ball,goal)
    {
        goal.disableBody(true, true);
        score+=100;
        scoreText.setText('Score: ' + score);
        this.scene.switch('LVLComplete');
        goalBgm.play();
    }
    onTrigger(){
            star.setVelocityX(300);
            star.setBounce(1);
            star.setVelocityY(-300);
            this.trigger.disableBody(true,true);
    }
    onPause(){
        this.scene.pause();
        this.scene.launch('PauseMenu');
    }
}
