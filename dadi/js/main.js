// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.



const button_submit = document.getElementById("button_submit")

    // evento 
    button_submit.addEventListener('click',

    function () {
        // generare i numeri rando per il giocatore 
        const userNumber = Math.floor(Math.random() * 6 + 1)

        // generare i numeri random per il pc
        const pcNumber = Math.floor(Math.random() * 6 + 1)

        // numeri usciti sulla console 
        console.log('userNumber', userNumber, typeof userNumber)
        console.log('pcNumber', pcNumber, typeof pcNumber)

        // se il l'utente ha fatto un tito migliore del computer vince
        if (userNumber > pcNumber) {
            
            console.log("vince l'utente /////////////");
            document.getElementById("result").innerHTML = "vince l'utente";

        }
        // se invece il computer ha fatto il tiro migliore vince lui 
        else if (userNumber < pcNumber) {

            console.log("vince il pc /////////////");
            document.getElementById("result").innerHTML = "vince Il computer";

        }
        // se entrambi fanno lo stesso punteggio pareggiano 
        else {

            console.log("pareggio /////////////");
            document.getElementById("result").innerHTML = "pareggio";

        }

    }
)
