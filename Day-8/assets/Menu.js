class Menu extends Phaser.Scene
{
    constructor()
    {
        super('Menu');
    }
    preload(){
        this.load.image('button','assets/button.png');
        this.load.image('bk','assets/Background_2.png');
    }
    create()
    {
        this.add.image(500,400,'bk');
        this.button1 = this.add.image(150,150,'button').setScale(0.5);
        this.button1.setInteractive();
        this.button1.visible=true;
        this.button1.on('pointerdown',()=>this.loadLevel1());
        this.text1 = this.add.text(127, 127, '1', { fontSize: '64px', fill: '#000' });
        this.button2 = this.add.image(300,150,'button').setScale(0.5);
        this.button2.setInteractive();
        this.button2.visible=true;
        this.button2.on('pointerdown',()=>this.loadLevel2());
        this.text2 = this.add.text(273, 127, '2', { fontSize: '64px', fill: '#000' });
        this.button3 = this.add.image(450,150,'button').setScale(0.5);
        this.button3.setInteractive();
        this.button3.visible=true;
        this.button3.on('pointerdown',()=>this.loadLevel3());
        this.text3 = this.add.text(427, 127, '3', { fontSize: '64px', fill: '#000' });
    }
    loadLevel1()
    {
        this.scene.switch('LVL1');
    }
    loadLevel2()
    {
        this.scene.switch('LVL2');
    }
    loadLevel3()
    {
        this.scene.switch('LVL3');
    }
}
