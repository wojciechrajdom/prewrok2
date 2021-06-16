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


let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

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

function displayResult(argComputerMove, argPlayerMove){
    console.log('moves:', argComputerMove, argPlayerMove);
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

    if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        printMessage('Ty wygrywasz!');
    } else {
        printMessage('Tym razem przegrywasz :(');
    }
    if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
        printMessage('Ty wygrywasz!');
    } else {
        printMessage('Tym razem przegrywasz :(');
    }
    if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        printMessage('Ty wygrywasz!');
    } else {
        printMessage('Tym razem przegrywasz :(');
    }
    if (computerMove == 'kamień' && playerMove == 'kamień') {
        printMessage('Jest remis!');
    }else if (computerMove == 'papier' && playerMove == 'papier') {
        printMessage('Jest remis!');
    }else if (computerMove == 'nożyce' && playerMove == 'nożyce') {
        printMessage('Jest remis!');   
    }else if (playerMove != '1, 2, 3') {
        printMessage('Nieznany ruch!');
    }
    console.log(getMoveName('2'));
}    



