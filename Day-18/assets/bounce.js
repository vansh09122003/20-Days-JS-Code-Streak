var score = 0;
var ball;
var platforms;
var cursors;
var star;
var scoreText;
var goal;
var starCount;
var nail;
var pit;
var lvl = 0;
var pause;
var restart;

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
    scene:[LVL1,LVL2,LVL3,LVL4,LVL5,LVL6,LVL7,LVL8,LVLComplete,GameOver,PauseMenu,Menu],
};
var game = new Phaser.Game(config);