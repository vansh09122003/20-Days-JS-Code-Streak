var score = 0;
var ball;
var platforms;
var cursors;
var star;
var scoreText;
var goal;
var starCount;
var nail;

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
    scene:[LVL8,LVLComplete,GameOver],
};
var game = new Phaser.Game(config);