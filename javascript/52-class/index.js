// class = a blueprint for creating objects. Define what properties and methods they have. User a constructor for unique properties.

class player {
    score = 0;

    pause() {
        console.log("You paused the game!");
    }

    exit() {
        console.log("You exited the game!");
    }

}

const player1 = new player();
player1.score += 1;

console.log(player1.score);

player1.pause();
player1.exit();