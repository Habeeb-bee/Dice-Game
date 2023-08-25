'use strict';

const player0 = document.querySelector('.player-0-panel');
const player1 = document.querySelector('.player-1-panel');


// const score0 = document.getElementById('score-0');
// const score1 = document.getElementById('score-1');


const hold = document.querySelector('.btn-hold');
const reset = document.querySelector('.btn-new');

const current0 = document.getElementById('current-0');
const current1 = document.getElementById('current-1');

let score = [0, 0]
let currentScore = 0 ;
let activePlayer = 0;
const dice = document.querySelector('.dice');
const rollDice = document.querySelector('.btn-roll');
let playing = true;
     
function switchPlayers() {
    if ( activePlayer === 0 ) {
        document.getElementById(`current-${activePlayer}`).textContent = 0;
        currentScore = 0;
         activePlayer = 1;
         player1.classList.add('active');
         player0.classList.remove('active');
       
    }
    else{
        document.getElementById(`current-${activePlayer}`).textContent = 0;
       currentScore = 0;
        activePlayer = 0;
        player0.classList.add('active')
        player1.classList.remove('active')
     
    }
}


rollDice.addEventListener('click', function (e) {

    if (playing) {
        
    
 let roll = Math.trunc(Math.random() * 6) + 1;
    dice.classList.remove('hidden');
    dice.src = `dice-${roll}.png`;

    if (roll !==1) {
        currentScore += roll;
        document.getElementById(`current-${activePlayer}`).textContent = currentScore;
    }  
    else{
        switchPlayers()
    }

    
}
});



hold.addEventListener('click', function (e) {
    
if (playing) {
    score[activePlayer] += currentScore;
    document.getElementById(`score-${activePlayer}`).textContent = score[activePlayer];
   


console.log(score[activePlayer])

    if ( score[activePlayer] >= 10) {

        playing = false;
        document.querySelector(`.player-${activePlayer}-panel`).classList.add('winner');
        player0.classList.remove('active')
        player1.classList.remove('active')
        // document.querySelector(`.winner1`).classList.remove('hidden');  add some innerHtml later//
        dice.classList.add('hidden');
    } else {
        
    }

    switchPlayers()
}  
})


// reset.addEventListener('click', function (e) {

//     e.reload
    
// })





