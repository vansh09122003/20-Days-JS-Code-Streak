var mainText;
var spring1,spring2,spring3,spring4;
var config={
    type:Phaser.AUTO,
    width: 1400,
    height: 800,
    scene:[Anim3],
    physics: {
        default: "arcade",
    },
};
var game = new Phaser.Game(config);