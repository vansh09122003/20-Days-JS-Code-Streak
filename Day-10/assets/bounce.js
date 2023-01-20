var score = 0;
var ball;
var platforms;
var cursors;
var star;
var scoreText;
var goal;
var starCount;

var config={
    type:Phaser.AUTO,
    width: 1400,
    height: 800,
    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene:[Start,Menu,LVL1,LVL2,LVL3,LVLComplete],
};
var game = new Phaser.Game(config);