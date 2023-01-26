// Chiedi all'utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull'esito del controllo.


// creo la lista delle email 
const valid_email = [
    "carlocolletti@gmail.com",
    "marcocolletti@gmail.com",
    "marcopolopolo32@gmail.com",
    "paolocaronte@outlook.it",
    "vincenzosiberiani@libero.it",
]

// collego il bottone per la richiesta 
const button_submit = document.getElementById("button_submit")

// evento 
button_submit.addEventListener('click',

    function () {
        // inserisco l'email 
        const emailInput = document.getElementById("email-not-validate");
        // let emailInput = prompt('Inserisci la tua email');
        
        let verifica = false;
        // controlla tutte le email della lista 
        for (let i = 0; i < valid_email.length; i++) {
            // verifica se è presente nella lista 
            if (emailInput.value == valid_email[i]) {
                verifica = true;
                
            }
        }
        // se è presente accede 
        if (verifica == true) {
            console.log('la tua email è stata verificata con successo');
            document.getElementById("result").innerHTML = "la tua email è stata verificata con successo";
        }
        // altrimenti accesso negato 
        else {
            console.log('la tua email non è autorizzata');
            document.getElementById("result").innerHTML = "la tua email non è autorizzata";
        }
       

    }
)




