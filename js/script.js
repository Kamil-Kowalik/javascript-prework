function getMoveName(argMoveId){
    if(argMoveId == 1){
        return 'kamień';
    } else if(argMoveId == 2){
        return 'papier'
    } else if(argMoveId == 3){
        return 'nożyce'
    } else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '.');
      return 'nieznany ruch';
    }
  }

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let argComputerMove = getMoveName(randomNumber);

/*if(randomNumber == 1){
  computerMove = 'kamień';
} else if (randomNumber == 2){
    computerMove = 'papier';
} else if (randomNumber == 3){
    computerMove = 'nożyce';
}*/


printMessage('Twój ruch to: ' + argComputerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let argPlayerMove = getMoveName(playerInput)

/*if(playerInput == '1'){
  playerMove = 'kamień';
} else if (playerInput == '2'){
    playerMove = 'papier';
} else if (playerInput == '3'){
    playerMove = 'nożyce';
} */

printMessage('Mój ruch to: ' + argPlayerMove);

console.log('moves:', argComputerMove, argPlayerMove);

function displayResult(argComputerMove, argPlayerMove){
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  
    if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        printMessage('Ty wygrywasz!');
        return 'Ty wygrywasz'
    } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
        printMessage('Ty wygrywasz!');
        return 'Ty wygrywasz'
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        printMessage('Ty wygrywasz!');
        return 'Ty wygrywasz'
    } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień'){
        printMessage('Ty przegywasz!');
        return 'Ty przegrywasz'
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
        printMessage('Ty przegywasz!');
        return 'Ty przegrywasz'
    } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
        printMessage('Ty przegywasz!');
        return 'Ty przegrywasz'
    } else if (argComputerMove ==  argPlayerMove) {
        printMessage('To remis!');
        return 'To remis'
    } else {
        return('Nieznany ruch')
        printMessage('Nieznany ruch')
    }
  }
  displayResult (argComputerMove, argPlayerMove)

/*if( computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
} else if (computerMove == 'papier' && playerMove == 'nożyce'){
    printMessage('Ty wygrywasz!');
} else if (computerMove == 'nożyce' && playerMove == 'kamień'){
    printMessage('Ty wygrywasz!');
} else if (computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('Ty przegywasz!');
} else if (computerMove == 'nożyce' && playerMove == 'papier'){
    printMessage('Ty przegywasz!');
} else if (computerMove == 'kamień' && playerMove == 'nożyce'){
    printMessage('Ty przegywasz!');
} else if (computerMove ==  playerMove) {
    printMessage('To remis!');
} else {
    printMessage('Nieznany ruch');
}*/
