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
    gameArea.innerHTML = ``;
}

//add event listener to play button
document.getElementById('play-button').addEventListener('click', createGame);
