var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1);
var randomImage = ["images/dice6.png","images/dice5.png", "images/dice4.png", "images/dice3.png", "images/dice2.png", "images/dice1.png"];
document.querySelector(".img1").setAttribute("src", randomImage[randomNumber1]);
var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = Math.floor(randomNumber2);
var randomImage2 = ["images/dice6.png","images/dice5.png", "images/dice4.png", "images/dice3.png", "images/dice2.png", "images/dice1.png"];
document.querySelector(".img2").setAttribute("src", randomImage2[randomNumber2]);
if (randomImage[randomNumber1]===randomImage2[randomNumber2]){
    document.querySelector("h1").innerHTML=("Draw!!");
}
else if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML=("Player 2 Wins!!");
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML=("Player 1 Wins!!");
}
else{
    document.querySelector("h1").innerHTML=("Refresh Me");

}