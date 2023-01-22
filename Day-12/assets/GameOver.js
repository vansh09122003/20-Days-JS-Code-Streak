class GameOver extends Phaser.Scene
{
    constructor()
    {
        super('GameOver');
    }
    preload(){
        this.load.image('congrats','assets/congrats.png');
    }
    create()
    {
        this.add.image(500,400,'bk');
        platforms = this.physics.add.staticGroup();
        platforms.create(0, 800, 'block').setScale(12,0.2).refreshBody();
        scoreText = this.add.text(500, 400, 'Game Over', { fontSize: '64px', fill: '#000' });
        scoreText = this.add.text(570, 500, 'Click To Retry', { fontSize: '24px', fill: '#000' });
    }
}
