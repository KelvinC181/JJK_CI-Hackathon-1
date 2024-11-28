//Play Button
    //1.generate game html
    //1.1. remove intro area
    //1.2. remove play button
    //1.3 create html elements
//2. add event listener to play button to call the function


/**
 * Creates the html elements for the game
 */
const createGame = () => {
    //remove intro area
    document.getElementById('intro-area').remove();
    //remove play button
    document.getElementById('play-button').remove();
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

    //add event listener to submit button
    document.getElementById('submit-button').addEventListener('click', gamePhaseOne);
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
    }
}