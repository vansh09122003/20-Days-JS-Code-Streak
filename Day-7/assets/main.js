var mainText;
var config={
    type:Phaser.AUTO,
    width: 1400,
    height: 800,
    scene:[Anim1,Anim2],
    physics: {
        default: "arcade",
    },
};
var game = new Phaser.Game(config);