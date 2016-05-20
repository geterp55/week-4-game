//add click to buttons and show some numbers


//VARIABLES
//==============================================================
var gameStart = [23, 37, 55, 75, 88];
var gemValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var runTotal = 0;

//var wins: 0;
//var loses: 0;
//var buttons = {
//			#ruby,
//			#emerald,
//			#yellow,
//			#diamond,
//}

//var rubyButton = 0;
//var emeraldButton = 0;
//var yellowButton = 0;
//var diamondButton = 0;


//Start game
//function (startGame){
	var gameGuess = gameStart[Math.floor(Math.random() * gameStart.length)];
	console.log(gameGuess);
//}
	
	

	for (var i=0; i < 12; i++){
		var gemClick = gemValues[Math.floor(Math.random() * gemValues.length)];
		console.log(gemClick);

		if (runTotal < gameGuess){
			runTotal = runTotal + gemClick;
			console.log(runTotal + " total");  
		}
		else if(runTotal === gameGuess){
			runTotal = runTotal + " You Win";
			console.log(runTotal);
		}
		else{
			runTotal = runTotal + " You lose!";
			console.log(runTotal);
		}
	}







//document.getElementById("Ruby").addEventListner("click", myFunction);
	
//function myFunction(){
//	document.getElementById("Ruby").src="ruby.jpg"
//}









//FUNCTIONS
//==============================================================
//document.onkeyup = function(event){
//	var buttons.#ruby = String.fromCharCode(event.keyCode).toLowerCase();
//	console.log(numbersToGuess)
//}

//var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//var buttonGuess = numbersToGuess[Math.floor(Math.random() * numbersToGuess.length)];












//MAIN PROCESS
//==============================================================

//click(buttons.#ruby);






