function playGame(playerInput){
    clearMessages()
    playerMove = getMoveName(playerInput);
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
    
    printMessage('Zagrałem: ' + computerMove);

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

document.getElementById('play-rock').addEventListener('click', function(){
    playGame('1');
});
document.getElementById('play-paper').addEventListener('click', function(){
    playGame('2');
}); 
document.getElementById('play-scissors').addEventListener('click', function(){
    playGame('3');
});   
