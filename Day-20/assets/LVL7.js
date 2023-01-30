class LVL7 extends Phaser.Scene
{
    constructor()
    {
        super('LVL7');
    }
    preload()
    {
        this.load.image('bk','assets/Background_2.png');
        this.load.image('block', 'assets/block.png');
        this.load.image('ball','assets/ball.png');
        this.load.image('star', 'assets/star.png');
        this.load.image('goal','assets/goal.png');
        this.load.image('nail','assets/nail.png')
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
        nail.x=ball.x;
        console.log(ball.x);
    }
    create()
    {
        lvl=7;
        starCount=0;
        this.add.image(500,400,'bk');
        platforms = this.physics.add.staticGroup();
        platforms.create(0, 800, 'block').setScale(12,0.2).refreshBody();
        ball=this.physics.add.sprite(740,300,'ball').setScale(0.04);
        ball.setCollideWorldBounds(true);
        this.physics.add.collider(ball, platforms);
        cursors = this.input.keyboard.createCursorKeys();
        scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
        platforms.create(0, 600, 'block').setScale(0.3,0.03).refreshBody();
        platforms.create(680, 500, 'block').setScale(0.2,0.03).refreshBody();
        platforms.create(1200, 300, 'block').setScale(0.1,0.03).refreshBody();
        platforms.create(500, 300, 'block').setScale(0.15,0.03).refreshBody();
        platforms.create(800, 100, 'block').setScale(0.2,0.03).refreshBody();
        star = this.physics.add.image(100,500,'star').setScale(3);
        this.physics.add.overlap(ball, star, this.collectStar, null, this);
        star.setBounce(0.3);
        this.physics.add.collider(star, platforms);
        star.setCollideWorldBounds(true);
        nail=this.physics.add.image(850,650,'nail').setScale(0.09);
        this.physics.add.collider(nail, platforms);
        nail.setCollideWorldBounds(true);
        this.physics.add.overlap(ball, nail, this.onNail, null, this);
        this.trigger = this.physics.add.image(507,0,'trigger').setScale(3);
        this.trigger.setCollideWorldBounds(true);
        this.trigger.alpha=0;
        this.physics.add.collider(this.trigger, platforms);
        this.physics.add.overlap(ball, this.trigger, this.onTrigger, null, this);
        pause=this.add.sprite(1350,50,'pause',1).setScale(0.18);
        pause.setInteractive();
        pause.visible=true;
        pause.on('pointerdown',()=>this.onPause());
    }
    collectStar (ball, star)
    {
        star.disableBody(true, true);
        score += 10;
        starBgm.play();
        scoreText.setText('Score: ' + score);
        starCount+=1;
        if(starCount==2){
            goal=this.physics.add.image(1100,470,'goal').setScale(0.3);
            this.physics.add.collider(goal, platforms);
            this.physics.add.overlap(ball, goal, this.onGoal, null, this);
        }
        else if(starCount==1){
            star = this.physics.add.image(100,0,'star').setScale(3);
            this.physics.add.overlap(ball, star, this.collectStar, null, this);
            star.setBounce(0.3);
            this.physics.add.collider(star, platforms);
            nail.disableBody(true, true);
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
    onNail(){
        this.scene.start('GameOver');
        nailBgm.play();
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
