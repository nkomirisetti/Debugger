var rootContainer;
var gameContainer;
var messagesContainer;
var statsContainer;
var shopPopUp;
var bugs = []

$(document).ready(() => {
    rootContainer = $('#rootContainer');
    statsContainer = $('#statsContainer .winInner');
    messagesContainer = $('#messagesContainer .winInner');
    createGameScreen();
    createMessagePane();
    createStatsContainer();
    Prism.highlightAll();
    $(".window").draggable({ handle: ".winHeader" });
    
})

const createGameScreen = function () {
    gameContainer = $('#gameContainer');
    let codeContainer = $('#code');
    codeContainer.append(level1);
    var animationOffset = gameContainer.height() - codeContainer.height();
    console.log(gameContainer.height());
    console.log(codeContainer.height());
    codeContainer.parent().animate({
        "marginTop": animationOffset + "px"
    }, 200000, "linear");
    gameContainer.click(function(click){
        bugSquash(click);
    });
    createBugs();
}

var createMessagePane = function () {
    // initial email box 
    messagesContainer.prepend(createMessage("email", startEmail));
}

var createStatsContainer = function () {
    statsContainer.append(updateRAM(0));
    statsContainer.append(updateScore(0));
}

const createBugs = function(){

    var newBug = $('<img class ="bug" src="assets/sprites/beetle.gif"></img>');
    
    newBug.css({top: 700, left: Math.floor(Math.random() * 536), position:'absolute'});
    newBug.animate({
        top: '-60px'
    }, 5000,"linear", function(){
        newBug.remove();
        // lose life
    });

    newBug.click(function() {
        //newBug.attr("src",) update image
        console.log("we clickin");
        newBug.stop();
        newBug.fadeOut("fast", function(){
            newBug.remove();
            //addPoints
        });
    })

    // add new bug click event here
    gameContainer.append(newBug); 
}

const bugSquash = function(click){
    
}

