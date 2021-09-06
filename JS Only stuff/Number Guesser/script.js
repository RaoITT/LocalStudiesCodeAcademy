let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

//generate number between 1 and 0
function generateTarget(){
    return Math.floor(Math.random()*10);
}

//Check choices of player and PC, compare distances between target and number
//and then return the winner
function compareGuesses(human, computer, target){

    if(getAbsoluteDistance(human, target) < getAbsoluteDistance(computer, target)
        || getAbsoluteDistance(human, target) === getAbsoluteDistance(computer, target)){
        return true;
    }else if(getAbsoluteDistance(human, target) > getAbsoluteDistance(computer, target)){
        return false;
    }
}
// Update scores, get who guessed correctly in a string
function updateScore(Winner){
    if(Winner === 'human'){
        humanScore++;
    }else if(Winner === 'computer'){
        computerScore++;
    }
}

function advanceRound(){
    currentRoundNumber++;
}

function getAbsoluteDistance(Number, Target){
    return Math.abs(Target - Number);
}

function alert(){
    return 'number should be between 0 and 9';
}