const getUserChoice = userInput =>{
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissor' || userInput === 'bomb'){
        return userInput;
    }else{
        console.log('Please choose between rock, paper, scissor');
    }
};

function getComputerChoice(){
    let eleccion = Math.floor(Math.random() * 3);
    if(eleccion == 1){
        return 'rock';
    }else if(eleccion == 2){
        return 'paper';
    }else{
        return 'scissor'
    }
}

function determineWinner (userChoice, computerChoice){
    if(userChoice === computerChoice){
        console.log('The game was a tie')
    }else if(userChoice === 'rock'){
        if(computerChoice === 'paper'){
            console.log('Computer wins');
        }else{
            console.log('Player wins');
        }
    }else if(userChoice === 'paper'){
        if(computerChoice === 'scissor'){
            console.log('Computer wins');
        }else{
            console.log('Player wins');
        }
    }else if(userChoice === 'scissor'){
        if(computerChoice === 'rock'){
            console.log('Computer wins');
        }else{
            console.log('Player wins');
        }
    }else if(userChoice === 'bomb'){
        console.log('Bomb win againts anything cheater :/');
    }

}

function playGame(){
    var userChoice = getUserChoice('Bomb');
    var computerChoice = getComputerChoice();

    console.log(`The user is going with: ${userChoice} \n`);
    console.log(`The computer is going with: ${computerChoice} \n`);

    determineWinner(userChoice, computerChoice);
}

playGame();