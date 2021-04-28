// 1 - Mail
// Chiedi all'utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull'esito del controllo.


//Creo la lista con le mail
var authorisedMailList = ["antonio.banderas@hotmail.com", "javier.bardem@gmail.com", "fernando.ray@yahoo.com", "luis.homar@hotmail.com", "alex.gonzales@yahoo.com"];

//Chiedo al utente la sua mail
var userMail = prompt("Please write your email:");

// Controllo se la mail e' nella lista
var authorisedMail = false; //di default la mail non e' autorizzata

for (i = 0; i < authorisedMailList.length; i++) {
    if (userMail == authorisedMailList[i]) {
        message = true; //se trovo la corrispondenza, la mail e' autorizzata
    }
}

//Stampo il messaggio a seconda del esito
if (message == true) {
    document.getElementById("result").innerHTML = "Congratulations, you are on the list!";
} else {
    document.getElementById("result").innerHTML = "Unfortunately, you are not on the list";
}








