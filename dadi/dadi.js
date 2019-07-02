//Gioco dei dadi, chi fa di più vince;

//imposto i label html
var labelP1 = document.getElementById("label-player-1");
var labelP2 = document.getElementById("label-player-2");
var labelWinner = document.getElementById("label-winner");

//dichiaro variabili del programma
var die1, die2, player1, player2, score;

//giocatore 1
die1 = Math.floor((Math.random() * 6 + 1));
die2 = Math.floor((Math.random() * 6 + 1));

player1 = die1 + die2;
labelP1.innerHTML= "Giocatore 1: " + die1 + " + " + die2 +" = " + player1;

//giocatore 2
die1 = Math.floor((Math.random() * 6 + 1));
die2 = Math.floor((Math.random() * 6 + 1));

player2 = die1 + die2;
labelP2.innerHTML= "Giocatore 2: " + die1 + " + " + die2 +" = " + player2;

//determino il vincitore
if (player1 == player2){
  labelWinner.innerHTML = "Pareggio!";
} else if (player1 > player2){
  labelWinner.innerHTML = "Giocatore 1 vince!";
} else {
  labelWinner.innerHTML = "Giocatore 2 vince!";
}
