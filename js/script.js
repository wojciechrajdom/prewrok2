function playGame(playerInput = 3){
    clearMessages()
    playerMove = playerInput;
    function getMoveName(argMoveId){
        if(argMoveId == 1){
        return 'kamień';
        }else if (argMoveId == 2){
            return 'papier';
        }else if (argMoveId == 3){
            return 'nożyce';
        }
        
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
            return 'nieznany ruch'; 
    }

    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    let computerMove = getMoveName(randomNumber);

    /*if(randomNumber == 1){
    computerMove = 'kamień';

    }else if (randomNumber == 2) {
        computerMove = 'papier';

    }else if (randomNumber == 3) {
        computerMove = 'nożyce';
    }*/
    printMessage('Zagrałem: ' + computerMove);


    /*let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

    console.log('Gracz wpisał: ' + playerInput);

    let playerMove = getMoveName(playerInput);

    /*if(playerInput == '1'){
    playerMove = 'kamień';

    }else if (playerInput == '2') {
        playerMove = 'papier';
        
    }else if (playerInput == '3') {
        playerMove = 'nożyce';
    }*/

    printMessage('Ty: ' + playerMove);

    function displayResult(argComputerMove, argPlayerMove) {    
        
        if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
            printMessage('Ty wygrywasz!');
            }else if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
                printMessage('Ty wygrywasz!');
            }else if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
                printMessage('Ty wygrywasz!');
            }else if (computerMove == 'kamień' && playerMove == 'kamień') {
                printMessage('Jest remis!');
            }else if (computerMove == 'papier' && playerMove == 'papier') {
                printMessage('Jest remis!');
            }else if (computerMove == 'nożyce' && playerMove == 'nożyce') {
                printMessage('Jest remis!');   
            }else{
                printMessage('Tym razem przegrywasz :(');
            }                          
    }                   
    displayResult(computerMove, playerMove); 
}     

document.getElementById(id='play-rock').addEventListener('click', function(){
    playGame(playerInput = 1)('Zagrałem: ' + computerMove + 'Ty: ' + playerMove + displayResult)
});
document.getElementById(id='play-paper').addEventListener('click', function(){
    playGame(playerInput = 2)('Zagrałem: ' + computerMove + 'Ty: ' + playerMove + displayResult)
}); 
document.getElementById(id='play-scissors').addEventListener('click', function(){
    playGame(playerInput = 3)('Zagrałem: ' + computerMove + 'Ty: ' + playerMove + displayResult)
});   
