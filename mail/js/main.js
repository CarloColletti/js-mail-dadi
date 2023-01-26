// Chiedi all'utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull'esito del controllo.


// creo la lista delle email 
const valid_email = [
    "carlocolletti@gmailcom",
    "marcocolletti@gmail.com",
    "marcopolopolo32@gmail.com",
    "paolocaronte@outlook.it",
    "vincenzosiberiani@libero.it", 
]

const user = prompt('inserisci la tua email:');
console.log('user')


for (let i = 0; i <= valid_email.length; i++) {
    if (user == valid_email[i]) {
        alert("si")
    }
    else{
        alert("no")
    }
}
