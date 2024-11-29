//Play Button
//1.generate game html
//1.1. remove intro area
//1.2 create html elements
//2. add event listener to play button to call the function


/**
 * Creates the html elements for the game
 */
const createGame = () => {
    //remove intro area
    document.getElementById('intro-area').remove();
    //create html elements
    const gameArea = document.getElementById('play-area');
    gameArea.innerHTML = `<div class="row">
                    <div class="col-12 col-md-6 d-flex justify-content-center text-center my-3" id="input-area">
                        <div class="row">
                            <div class="col-12 my-3">
                                <input type="number" id="input-number">
                            </div>
                            <div class="col-12 mb-3">
                                <button type="button" class="btn btn-primary" id="submit-button">Submit</button>
                            </div>
                            <div class="col-12 mb-3">
                                <button type="button" class="btn btn-primary" id="reset-button">Reset</button>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-12 col-md-6 d-flex justify-content-center text-center my-3" id="display-area">
                        <div class="row">
                            <div class="col-12" id="score-counter">
                                <p>Current Total: <span id="current-total">0</span></p>
                            </div>
                            <div class="col-12" id="turn-counter">
                                <p>turns: <span id="turns-remaining">5</span></p>
                            </div>
                        </div>
                    </div>
                </div>`;

    //add event listener to buttons
    document.getElementById('submit-button').addEventListener('click', gamePhaseOne);
    document.getElementById('reset-button').addEventListener('click', resetGame);
}

//add event listener to play button
document.getElementById('play-button').addEventListener('click', createGame);

//Game Phase 1
//1. submit button
//1.1. generate random number
//1.2. get input value, check if input is valid
//1.3. if valid calculate difference of input number and generated number
//1.4. builds new content of input area
//2. add event listener to submit button


/** 
 * generates a random number between 1 and 10
 * reads the input value and checks if it is valid
 * returns myRoll which is the difference between the random number and the input number
 */
const gamePhaseOne = () => {
    let randomNumber = Math.floor(Math.random() * 10) + 1; //generate random number
    let userNumber = parseInt(document.getElementById('input-number').value); //get input value
    if (userNumber < 1 || userNumber > 10 || isNaN(userNumber)) { //check if input is valid
        alert('Please enter a number between 1 and 10');
        return;
    } else {
        let myRoll = Math.abs(randomNumber - userNumber); //calculate difference
        const inputArea = document.getElementById('input-area'); //replace input area content
        inputArea.innerHTML = `<div class="row">
                            <div class="col-12 my-3">
                                <div id="my-roll">${myRoll}</div>
                            </div>
                            <div class="col-12 mb-3">
                                <button type="button" class="btn btn-primary" id="subtract-button">Subtract</button>
                                <button type="button" class="btn btn-primary" id="addition-button">Add</button>
                            </div>
                            <div class="col-12 mb-3">
                                <button type="button" class="btn btn-primary" id="reset-button">Reset</button>
                            </div>
                        </div>`;
        //add event listener to buttons
        document.getElementById('addition-button').addEventListener('click', () => gamePhaseTwo(myRoll, 'addition'));
        document.getElementById('subtract-button').addEventListener('click', () => gamePhaseTwo(myRoll, 'subtract'));
        document.getElementById('reset-button').addEventListener('click', resetGame);
    }
}

//Add or Subtract(phase 2)
//1. add event listener to add/subtract button
//2  add/subtract myRoll value to current total
//3. reduce turns remaining
//4. determine if the game is over
//4.1 if turns remaining is 0, game over
//4.2 if current total is 21, win
//4.3 else return to game phase 1

/**
 * adds or subtracts myRoll value to the current total
 * reduces turns remaining
 * check for win/loss/continue
 * takes action according to check
 */
const gamePhaseTwo = (myRoll, action) => {
    //add or subtract myRoll value to current total
    if (action === 'addition') {
        let currentTotal = parseInt(document.getElementById('current-total').innerText);
        document.getElementById('current-total').innerText = currentTotal + myRoll;
    } else if (action === 'subtract') {
        let currentTotal = parseInt(document.getElementById('current-total').innerText);
        document.getElementById('current-total').innerText = currentTotal - myRoll;
    }

    //reduce turns remaining
    let turnsRemaining = parseInt(document.getElementById('turns-remaining').innerText);
    document.getElementById('turns-remaining').innerText = --turnsRemaining;
    let currentTotal = parseInt(document.getElementById('current-total').innerText);

    if (currentTotal === '21') { //check for win
        alert('You Win');
        location.reload();
    } else if (turnsRemaining === 0) { //check for loss
        alert('Game Over');
        location.reload();
    } else { //return to game phase 1
        const inputArea = document.getElementById('input-area');
        inputArea.innerHTML = `<div class="row">
            <div class="col-12 my-3">
                <input type="number" id="input-number">
            </div>
            <div class="col-12 mb-3">
                <button type="button" class="btn btn-primary" id="submit-button">Submit</button>
            </div>
            <div class="col-12 mb-3">
                <button type="button" class="btn btn-primary" id="reset-button">Reset</button>
            </div>
        </div>
    </div>`;

        //re-add event listeners to buttons
        document.getElementById('submit-button').addEventListener('click', gamePhaseOne);
        document.getElementById('reset-button').addEventListener('click', resetGame);
    };
}

//resetting the game
//1. add event listener to reset button
//2. return gamestate to start
//2.1. set current total to 0
//2.2. set turns remaining to 5
//2.3. return to game phase 1

/**
 * sets currentTotal to 0
 * sets turns remaining to 5
 * returns to game phase 1
 */
const resetGame = () => {
    //reset game state
    document.getElementById('current-total').innerText = 0;
    document.getElementById('turns-remaining').innerText = 5;
    //rebuild input area
    const inputArea = document.getElementById('input-area');
    inputArea.innerHTML = `<div class="row">
        <div class="col-12 my-3">
            <input type="number" id="input-number">
        </div>
        <div class="col-12 mb-3">
            <button type="button" class="btn btn-primary" id="submit-button">Submit</button>
        </div>
        <div class="col-12 mb-3">
            <button type="button" class="btn btn-primary" id="reset-button">Reset</button>
        </div>
    </div>
</div>`;

    //re-add event listener to buttons
    document.getElementById('submit-button').addEventListener('click', gamePhaseOne);
    document.getElementById('reset-button').addEventListener('click', resetGame);
}