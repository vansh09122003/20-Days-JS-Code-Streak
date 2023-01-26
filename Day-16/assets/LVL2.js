class LVL2 extends Phaser.Scene
{
    constructor()
    {
        super('LVL2');
    }
    preload()
    {
        this.load.image('bk','assets/Background_2.png');
        this.load.image('block', 'assets/block.png');
        this.load.image('ball','assets/ball.png');
        this.load.image('star', 'assets/star.png');
        this.load.image('goal','assets/goal.png');
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
        platforms.create(680, 500, 'block').setScale(0.2,0.03).refreshBody();
        platforms.create(1200, 300, 'block').setScale(0.1,0.03).refreshBody();
        platforms.create(500, 300, 'block').setScale(0.15,0.03).refreshBody();
        platforms.create(800, 100, 'block').setScale(0.2,0.03).refreshBody();
        star = this.physics.add.image(1200,0,'star').setScale(3);
        this.physics.add.overlap(ball, star, this.collectStar, null, this);
        star.setBounce(0.3);
        this.physics.add.collider(star, platforms);
    }
    collectStar (ball, star)
    {
        star.disableBody(true, true);
        score += 10;
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
        }
    }
    onGoal(ball,goal)
    {
        goal.disableBody(true, true);
        score+=100;
        scoreText.setText('Score: ' + score);
        this.scene.switch('LVLComplete');
    }
}
