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
    scene:[LVL4],
};
var game = new Phaser.Game(config);