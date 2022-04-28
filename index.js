function mainFunction(){
var randomNum = Math.floor((Math.random()*6)+1);
var randomNum2 = Math.floor((Math.random()*6)+1);
if(randomNum == 1){
  document.querySelector("img.img1").src="images/dice1.png"
}
else if(randomNum == 2){
  document.querySelector("img.img1").src="images/dice2.png"
}
else if(randomNum == 3){
  document.querySelector("img.img1").src="images/dice3.png"
}
else if(randomNum == 4){
  document.querySelector("img.img1").src="images/dice4.png"
}
else if(randomNum == 5){
  document.querySelector("img.img1").src="images/dice5.png"
}
else if(randomNum == 6){
  document.querySelector("img.img1").src="images/dice6.png"
}
else {
  alert("Someting wong")
}
if(randomNum2 == 1){
  document.querySelector("img.img2").src="images/dice1.png"
}
else if(randomNum2 == 2){
  document.querySelector("img.img2").src="images/dice2.png"
}
else if(randomNum2 == 3){
  document.querySelector("img.img2").src="images/dice3.png"
}
else if(randomNum2 == 4){
  document.querySelector("img.img2").src="images/dice4.png"
}
else if(randomNum2 == 5){
  document.querySelector("img.img2").src="images/dice5.png"
}
else if(randomNum2 == 6){
  document.querySelector("img.img2").src="images/dice6.png"
}
else {
  alert("sumting wong")
}

if (randomNum > randomNum2){
  document.querySelector("h1").innerHTML = "🚩 Player 1 wins";
}
else if (randomNum < randomNum2){
  document.querySelector("h1").innerHTML = "Player 2 wins 🚩";
}
else{
  document.querySelector("h1").innerHTML = "Draw";
}
}
