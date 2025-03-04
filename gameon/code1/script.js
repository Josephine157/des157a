(function(){
    'use strict';
    console.log('reading JS');

    const score = document.querySelector('#score');
    const actionArea = document.querySelector('#actions');
    const startGame = document.querySelector('#startgame');
    const gameControl = document.querySelector('#gamecontrol');
    const game = document.querySelector('#game');

    const gameData = {
        dice: ['1die.jpg', '2die.jpg', '3die.jpg', 
               '4die.jpg', '5die.jpg', '6die.jpg'],
        players: ['player 1', 'player 2'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29
    };

    function showCurrentScore() {
        score.innerHTML = `<p>The score is currently <strong>${gameData.players[0]}: ${gameData.score[0]}</strong> and <strong>${gameData.players[1]}: ${gameData.score[1]}</strong></p>`;
    }

    function setUpTurn(){
        game.innerHTML = `<p>Roll the dice for ${gameData.players[gameData.index]}</p>`;
        actionArea.innerHTML = '<button id="roll">Roll the Dice</button>';
        document.querySelector('#roll').addEventListener('click', function(){
            throwDice();
        });
    }

    startGame.addEventListener('click', function(){
        gameData.index = Math.round(Math.random());
        console.log(gameData.index);

        gameControl.innerHTML = '<h2>The game has started</h2>';
        gameControl.innerHTML += '<button id="quit">Wanna Quit?</button>';
        document.querySelector('#quit').addEventListener('click', function(){
            location.reload();
        });
        setUpTurn();
    });

    function throwDice(){
        actionArea.innerHTML = '';
        gameData.roll1 = Math.floor(Math.random() * 6) + 1;
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;
        game.innerHTML = `<p>Roll the dice for ${gameData.players[gameData.index]}</p>`;
        game.innerHTML += `<img src="images/${gameData.dice[gameData.roll1-1]}">
                           <img src="images/${gameData.dice[gameData.roll2-1]}">`;
        gameData.rollSum = gameData.roll1 + gameData.roll2;

        if(gameData.rollSum === 2){
            // Snake eyes!
            game.innerHTML += '<p>Oh snap! Snake eyes!</p>';
            gameData.score[gameData.index] = 0;
            gameData.index = gameData.index === 0 ? 1 : 0;
            setTimeout(setUpTurn, 2000);
        }
        else if(gameData.roll1 === 1 || gameData.roll2 === 1){
            console.log('one of the two dice rolled a 1');
            gameData.index = gameData.index === 0 ? 1 : 0;
            game.innerHTML += `<p>Sorry, one of rolls was a one, switching to ${gameData.players[gameData.index]}</p>`;
            setTimeout(setUpTurn, 2000);
        }
        else {
            gameData.score[gameData.index] += gameData.rollSum;
            actionArea.innerHTML = '<button id="rollagain">Roll again</button> or <button id="pass">Pass</button>';
            document.querySelector('#rollagain').addEventListener('click', function(){
                throwDice();
            });
            document.querySelector('#pass').addEventListener('click', function(){
                gameData.index = gameData.index === 0 ? 1 : 0;
                setUpTurn();
            });
            checkWinningCondition();
        }
        showCurrentScore();
    }

    function checkWinningCondition(){
        if(gameData.score[gameData.index] >= gameData.gameEnd){
            score.innerHTML = `<h2>${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points!</h2>`;
            actionArea.innerHTML = '';
            document.querySelector('#quit').innerHTML = 'Start new game?';
        }
    }
})();
