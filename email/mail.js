//Chiedi all’utente la sua email,  controlla che sia nella lista di chi può accedere e stampa un messaggio appropriato;

// imposto i campi html

var labelEmail = document.getElementById("label-email");
var labelResult = document.getElementById("label-result");

//dichiaro variabili del programma
var result, email, emailList, result;

//creo array di email
emailList = [
  "ex1@example.com",
  "ex2@example.com",
  "ex3@example.com",
  "ex4@example.com",
  "ex5@example.com",
  "ex6@example.com",
  "ex7@example.com"
];

//imposto prompt utente
email = prompt("inserisci la tua email...");

//mostro l'email inserita
labelEmail.innerHTML = "Hai inserito: " + email;

//itera la lista per confermare eguaglianza
for (i = 0; i < emailList.length; i++){

  if (emailList[i] === email){
    labelResult.innerHTML = "La email è nella lista!";
    break;
  } else{
    labelResult.innerHTML = "Email non trovata!";
  }

}

//versione alternativa
/* var result;

for (i = 0; i < emailList.length; i++){

  if (emailList[i] === email){
    result = true;
  } 

}

if (result) {
 labelResult.innerHTML = "La email è nella lista!";
} else{
  labelResult.innerHTML = "Email non trovata!";
}
 */
