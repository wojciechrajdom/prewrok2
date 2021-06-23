{let playGame = function(playerInput){
    clearMessages()
    let getMoveName = function(argMoveId){
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
    playerMove = getMoveName(playerInput);

    const randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    const computerMove = getMoveName(randomNumber);
    
    printMessage('Zagrałem: ' + computerMove);

    printMessage('Ty: ' + playerMove);

    let displayResult = function(argComputerMove, argPlayerMove) {    
        
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
});}   
