//1.generate game html
 //1.1. remove intro area
 //1.2. remove play button
 //1.3 create html elements
//2. add event listener to play button to call the function


//generate game html
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
}

//add event listener to play button
document.getElementById('play-button').addEventListener('click', createGame);
