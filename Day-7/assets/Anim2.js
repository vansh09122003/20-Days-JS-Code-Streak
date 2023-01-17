class Anim2 extends Phaser.Scene{
    constructor(){
        super("Anim2")
    }
    preload(){
        this.load.image('bk','assets/Background_2.png');
    }
    create(){
        this.add.image(500,400,'bk');
        this.mainText=this.add.text(-1000, 20, 'What We Do?', { fontSize: '48px', fill: '#DF9B00'});
        this.physics.world.enableBody(this.mainText);
        this.point1 = this.add.text(-1000, 100, '->  Education Help:- 10Rs', { fontSize: '32px', fill: '#DF9B00'});
        this.physics.world.enableBody(this.point1);
        this.point2 = this.add.text(-1000, 150, '->  Educating and Empowering Women:- 501Rs', { fontSize: '32px', fill: '#DF9B00'});
        this.physics.world.enableBody(this.point2);
        this.point3 = this.add.text(-1000, 200, '->  One Girl Child One Month Education Help:- 1100Rs', { fontSize: '32px', fill: '#DF9B00'});
        this.physics.world.enableBody(this.point3);
        this.point4 = this.add.text(-1000, 250, '->  One Girl Child Yearly Education Help:- 11000Rs', { fontSize: '32px', fill: '#DF9B00'});
        this.physics.world.enableBody(this.point4);
        this.point5 = this.add.text(-1000, 300, '->  Adoring a Girl Child:- Contact Us', { fontSize: '32px', fill: '#DF9B00'});
        this.physics.world.enableBody(this.point5);
        this.heading();
    }
    update(){
        if(Math.floor(this.mainText.body.x)>=100){
            this.mainText.body.setVelocityX(0);
            this.help1();
        }
        if(Math.floor(this.point1.body.x)>=120){
            this.point1.body.setVelocityX(0);
            this.help2();
        }
        if(Math.floor(this.point2.body.x)>=120){
            this.point2.body.setVelocityX(0);
            this.help3();
        }
        if(Math.floor(this.point3.body.x)>=120){
            this.point3.body.setVelocityX(0);
            this.help4();
        }
        if(Math.floor(this.point4.body.x)>=120){
            this.point4.body.setVelocityX(0);
            this.help5();
        }
        if(Math.floor(this.point5.body.x)>=120){
            this.point5.body.setVelocityX(0);
        }
    }
    heading(){
        this.mainText.body.setVelocityX(350);
    }
    help1(){
        this.point1.body.setVelocityX(250);
    }
    help2(){
        this.point2.body.setVelocityX(250);
    }
    help3(){
        this.point3.body.setVelocityX(250);
    }
    help4(){
        this.point4.body.setVelocityX(250);
    }
    help5(){
        this.point5.body.setVelocityX(250);
    }
}