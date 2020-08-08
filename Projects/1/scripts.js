var isX = true;
var gameBoard = ["n", "n", "n",
                 "n", "n", "n",
                 "n", "n", "n"];

function runGame(clicked_id){
    let cell = document.getElementById(clicked_id);
    let cellNum = clicked_id;
    let winner = document.getElementById("win-tracker");

    winner.innerHTML="";

    if (isPlaced(cell)) return;
    setActivePlayer(isX);
    placeMarker(isX, cell, cellNum);
    
    if(checkWin()) {
        if(isX){
            winner.innerHTML = "Player 1 Wins!";
        } else {
            winner.innerHTML = "Player 2 Wins!";
        }
        window.setTimeout(resetGame,500);
        return;
    }

    if(checkDraw()) {
        winner.innerHTML = "There's a draw!";

        window.setTimeout(resetGame, 500);
        return;
    }

    isX = !isX;
    switchMarker(isX);
}

function resetGame() {
    let cellList = document.getElementsByClassName("cell");

    for(var i = 0; i < cellList.length; i++) {
        cellList[i].classList.remove("x");
        cellList[i].classList.remove("o");
    }
    for(var j = 0; j < gameBoard.length; j++) {
        gameBoard[j] = "n";
    }
    
    isX = true;
}

function isPlaced(cell){
    if (cell.className === "cell x" || cell.className === "cell o"){
        return true;
    } else {
        return false;
    }    
}

function setActivePlayer(isX){
    let player1 = document.getElementById("active-player-1");
    let player2 = document.getElementById("active-player-2");
    if(isX){
        player1.style.setProperty("text-decoration", "underline");
        player2.style.setProperty("text-decoration", "none");
    } else {
        player1.style.setProperty("text-decoration", "none");
        player2.style.setProperty("text-decoration", "underline");
    }
}

function placeMarker(isX, cell, cellNum){
    if (isX) {
        cell.classList.add("x");
        gameBoard[cellNum] = "x";
    } else {
        cell.classList.add("o");
        gameBoard[cellNum] = "o";
    }
}

function switchMarker(isX){
    let icon = document.documentElement;
    if (isX) {
        icon.style.setProperty("--marker", "url('../../Resources/Graphics/x.svg')");
    } else {
        icon.style.setProperty("--marker", "url('../../Resources/Graphics/o.svg')");
    }
}

function checkWin(){
    let checkMarker = "o";
    let result = false;
    if (isX) checkMarker = "x";

    if (gameBoard[0] === checkMarker && gameBoard[1] === checkMarker && gameBoard[2] === checkMarker) result = true;
    if (gameBoard[3] === checkMarker && gameBoard[4] === checkMarker && gameBoard[5] === checkMarker) result = true;
    if (gameBoard[6] === checkMarker && gameBoard[7] === checkMarker && gameBoard[8] === checkMarker) result = true;

    if (gameBoard[0] === checkMarker && gameBoard[3] === checkMarker && gameBoard[6] === checkMarker) result = true;
    if (gameBoard[1] === checkMarker && gameBoard[4] === checkMarker && gameBoard[7] === checkMarker) result = true;
    if (gameBoard[2] === checkMarker && gameBoard[5] === checkMarker && gameBoard[9] === checkMarker) result = true;

    if (gameBoard[0] === checkMarker && gameBoard[4] === checkMarker && gameBoard[8] === checkMarker) result = true;
    if (gameBoard[2] === checkMarker && gameBoard[4] === checkMarker && gameBoard[6] === checkMarker) result = true;

    return result;
}

function checkDraw(){
    let result = true;
    for(var i = 0; i < gameBoard.length; i++) {
        if (gameBoard[i] === "n") {
            result = false;
        }
    }
    return result;
}