class Anim1 extends Phaser.Scene{
    constructor(){
        super("Anim1");
    }
    preload(){
        this.load.image('bk','assets/Background_2.png');
        this.load.image('rightHand', 'assets/right.png');
        this.load.image('leftHand','assets/left.png');
        this.load.image('top', 'assets/Top.png');
        this.load.image('bottom','assets/Bottom.png');
    }
    create(){
        this.add.image(500,400,'bk');
        this.leftHand=this.physics.add.image(0,400,"leftHand").setScale(0.5);
        this.rightHand=this.physics.add.image(1400,400,"rightHand").setScale(0.5);
        this.top=this.physics.add.image(700,0,"top").setScale(0.5);
        this.bottom=this.physics.add.image(700,800,"bottom").setScale(0.5);
        this.rightHand.setVelocityX(-100);
        this.leftHand.setVelocityX(100);
        this.top.setVelocityY(50);
        this.bottom.setVelocityY(-50);
    }
    update(time){
        if(Math.floor(this.leftHand.x)==700){
            this.leftHand.setVelocityX(0);
        }
        if(Math.floor(this.rightHand.x)==700){
            this.rightHand.setVelocityX(0);
        }
        if(Math.floor(this.top.y)==400){
            this.top.setVelocityY(0);
        }
        if(Math.floor(this.bottom.y)==400){
            console.log("bottom");
            this.bottom.setVelocityY(0);
        }
        if(Math.floor(this.leftHand.x)==700 && Math.floor(this.rightHand.x)==700 && 
            Math.floor(this.bottom.y)==400 && Math.floor(this.top.y)==400){
                var timer = scene.time.delayedCall(5000, this.scene.switch('Anim2'));
                
        }
    }
}