{
    const playGame = function (playerInput){
        clearMessages()

        const getMoveName = function (argMoveId){
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

        const randomNumber = Math.floor(Math.random() * 3 + 1);

        console.log('Wylosowana liczba to: ' + randomNumber);

    const argComputerMove = getMoveName(randomNumber);

        printMessage('Twój ruch to: ' + argComputerMove);

        /*let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');*/

        console.log('Gracz wpisał: ' + playerInput);

        const argPlayerMove = getMoveName(playerInput)

        printMessage('Mój ruch to: ' + argPlayerMove);

        console.log('moves:', argComputerMove, argPlayerMove);

        const displayResult = function(argComputerMove, argPlayerMove){
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
                printMessage('Ty przegrywasz!');
                return 'Ty przegrywasz'
            } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
                printMessage('Ty przegrywasz!');
                return 'Ty przegrywasz'
            } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
                printMessage('Ty przegrywasz!');
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

    }

    document.getElementById('play-rock').addEventListener('click', function(){
        playGame(1);
    });
    document.getElementById('play-paper').addEventListener('click', function(){
        playGame(2);
    });
    document.getElementById('play-scissors').addEventListener('click', function(){
        playGame(3);
    })
}