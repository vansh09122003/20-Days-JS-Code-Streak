class LVLComplete extends Phaser.Scene
{
    constructor()
    {
        super('LVLComplete');
    }
    preload(){
        this.load.image('congrats','assets/congrats.png');
    }
    create()
    {
        this.add.image(500,400,'bk');
        this.add.image(300,400,'congrats').setScale(0.5);
        platforms = this.physics.add.staticGroup();
        platforms.create(0, 800, 'block').setScale(12,0.2).refreshBody();
        scoreText = this.add.text(600, 400, 'Level Complete', { fontSize: '64px', fill: '#000' });
        this.physics.world.enableBody(scoreText);
        scoreText.body.setCollideWorldBounds(true);
        scoreText.body.setBounce(1);
        this.physics.add.collider(scoreText, platforms);
    }
}
