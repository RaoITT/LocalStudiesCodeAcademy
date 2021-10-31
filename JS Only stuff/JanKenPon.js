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
    var usChoide = '';
    var userChoice = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
      });
    userChoice.question('Pick rock, paper, or scissor: ', usChoide => {
        console.log(`User is going with: ${usChoide}`);
        var computerChoice = getComputerChoice();    
        console.log(`vs which computer is going with: ${computerChoice}`);
        determineWinner(usChoide, computerChoice);
        userChoice.close();
      });
}

playGame();