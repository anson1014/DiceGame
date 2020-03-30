/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;


// document.querySelector('#current-' + activePlayer).textContent = dice;
// CSS ID: current-1

// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
// alt way of altering text
// var x = document.querySelector('#score-0').textContent;
// getter

// document.querySelector('.dice').style.display = 'none';
// CSS CLASS: dice

// function btn() {
//     //
// }

// document.querySelector('.btn-roll').addEventListener('click', btn);
// // btn is the callback function, ie: not called by us

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';


document.querySelector('.btn-roll').addEventListener('click', function() {
    //called an anonymous function, does smt here
    // 1. random number
    var dice = Math.floor(Math.random() * 6) + 1;

    // 2. display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    // 3. Update the round score IF the rolled number is not 1
    if (dice !== 1) {
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        roundScore = 0;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        activePlayer === 0? activePlayer = 1 : activePlayer = 0;
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');

        // document.querySelector('.player-1-panel').classList.toggle('active');
        // document.querySelector('.player-0-panel').classList.toggle('active');
        // ALTERNATIVE WAY USING TOGGLE

        document.querySelector('.dice').style.display = 'none';
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    // Add CURRENT score to GLOBAL score


    // Update the UI


    // Check if the player won the game
});