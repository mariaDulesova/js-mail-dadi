// 1 - Mail
// Chiedi all'utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull'esito del controllo.

var authorisedMailList = ["antonio.banderas@hotmail.com", "javier.bardem@gmail.com", "fernando.ray@yahoo.com", "luis.homar@hotmail.com", "alex.gonzales@yahoo.com"];

var userMail = prompt("Please write your email:");


for (i = 0; i < authorisedMailList.length; i++) {
    if (userMail == authorisedMailList[i]) {
        // console.log ("Congratulations, you are on the list!")
        var message = "Congratulations, you are on the list!";
        document.getElementById("result").innerHTML = message;
    } else {
        // console.log ("Unfortunately, you are not on the list!")
        var message = "Unfortunately, you are not on the list!";
        document.getElementById("result").innerHTML = message;
    }
}

console.log(message);







