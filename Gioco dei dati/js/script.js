// 2 - Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


//Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?


var computer = Math.floor(Math.random() * 6) + 1;
console.log("Score computer:", computer);

var player = Math.floor(Math.random() * 6) + 1;
console.log("Score player:",player);

if (computer>player) {
    var message ="Computer is the winner";
    console.log(message);
} else if( computer<player) {
    var message ="Player is the winner";
    console.log(message);
} else {
    var message ="You are even";
    console.log(message);
}