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
    gameArea.innerHTML = `<section id="container">
            <div class="row">
                <div class="col-12 col-md-6 d-flex justify-content-center text-center">
                    <div class="row">
                        <div class="col-12">
                            <input type="number" id="input-number">
                        </div>
                        <div class="col-12">
                            <button type="button" class="btn btn-primary" id="submit-button">Submit</button>
                        </div>
                        <div class="col-12">
                            <button type="button" class="btn btn-primary" id="reset-button">Reset</button>
                        </div>
                    </div>
                </div>
                
                <div class="col-12 col-md-6 d-flex justify-content-center text-center">
                    <div class="row">
                        <div class="col-12">
                            <p>Current Total: <span>0</span></p>
                        </div>
                        <div class="col-12">
                            <p>turns: <span>5</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>`;
}

//add event listener to play button
document.getElementById('play-button').addEventListener('click', createGame);
