class PauseMenu extends Phaser.Scene
{
    constructor()
    {
        super('PauseMenu');
    }
    preload(){
        this.load.image('button','assets/button.png');
        this.load.image('bk','assets/Background_2.png');
        this.load.spritesheet('pause', 'assets/play.png',{ frameWidth: 420, frameHeight: 450 });
        this.load.image('reset','assets/restart.png');
        this.load.image('menu','assets/menu.png');
    }
    create()
    {
        this.add.image(500,400,'bk');
        this.add.sprite(550,400,'pause',0).setScale(0.18);
        this.button1 = this.add.image(550,400,'button').setScale(0.5);
        this.button1.setInteractive();
        this.button1.visible=true;
        this.button1.on('pointerdown',()=>this.onPlay());
        this.add.image(700,400,'reset').setScale(0.08);
        this.button2 = this.add.image(700,400,'button').setScale(0.5);
        this.button2.setInteractive();
        this.button2.visible=true;
        this.button2.on('pointerdown',()=>this.onRestart());
        this.add.image(850,400,'menu').setScale(0.25);
        this.button3 = this.add.image(850,400,'button').setScale(0.5);
        this.button3.setInteractive();
        this.button3.visible=true;
        this.button3.on('pointerdown',()=>this.onMenu());
    }
    onPlay()
    {
        this.scene.resume("LVL"+lvl);
        this.scene.stop();
    }
    onRestart()
    {
        this.scene.start("LVL"+lvl);
        this.scene.stop();
    }
    onMenu()
    {
        this.scene.switch('Menu');
        this.scene.stop();
    }
}
