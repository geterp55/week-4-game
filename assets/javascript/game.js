//add click to buttons and show some numbers


//VARIABLES
//==============================================================
var gameMasterNum = [23, 37, 55, 75, 88];
var gemValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var runTotal = 0;
var gemSingleValue = [];

var ruby = 0;
var emerald = 0;
var yellow = 0;
var diamond = 0;	




//var wins: 0;
//var loses: 0;






//THIS SELECTS THE START OF THE GAME
$(document).ready(function(){
		$("#startButton").click(function(){
	    
	    	
	        var gameGuess = gameMasterNum[Math.floor(Math.random() * gameMasterNum.length)];
			document.getElementById('counterBox').innerHTML = gameGuess;
			//console.log(gameGuess);use this to check if working
		 

		    $(".allButtons").click(function(){	
				
					var gemClick = gemValues[Math.floor(Math.random() * gemValues.length)];
					var gemclick = $('.allButtons').click;
					//var gemSingleValue = gemClick;
				


					
					if (runTotal < gameGuess){
						runTotal = runTotal + gemClick;
						document.getElementById('answer').innerHTML = runTotal;
						console.log(runTotal + " total");  
					}
					else if(runTotal === gameGuess){
						runTotal = runTotal + " You Win";
						document.getElementById('answer').innerHTML = runTotal;
		//NOTE: log wins wins++
						console.log(runTotal);
					}
					else{
						runTotal = runTotal + " You lose!";
						document.getElementById('answer').innerHTML = runTotal;
		//NOTE: log losses loss++				
						console.log(runTotal);
					}
			});

	    });
			//runTotal++;
			//document.getElementById('answer').innerHTML = runTotal;
			//console.log(gemClick);

});	 


	
	

	//for (var i=0; i < 12; i++){
	//	var gemClick = gemValues[Math.floor(Math.random() * gemValues.length)];
	//	console.log(gemClick);

	//	if (runTotal < gameGuess){
	//		runTotal = runTotal + gemClick;
	//		console.log(runTotal + " total");  
	//	}
	//	else if(runTotal === gameGuess){
	//		runTotal = runTotal + " You Win";
	//		console.log(runTotal);
	//	}
	//	else{
	//		runTotal = runTotal + " You lose!";
	//		console.log(runTotal);
	//	}
	//}







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






