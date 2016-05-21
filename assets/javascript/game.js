
var gameMasterNum = [23, 37, 55, 75, 88];
var runTotal = 0;
var gemSingleValue = [];

	


var ruby = Math.floor((Math.random() * 12) + 1);
var diamond = Math.floor((Math.random() * 12) + 1);
var emerald = Math.floor((Math.random() * 12) + 1);
var yellow = Math.floor((Math.random() * 12) + 1);




//$(document).ready(function(){
	// -----this starts the game--------------------------
		$("#startButton").click(function(){
	        var gameGuess = gameMasterNum[Math.floor(Math.random() * gameMasterNum.length)];
			document.getElementById('counterBox').innerHTML = gameGuess;
			
			
		    // $(".allButtons").click(function(){	
				
					
					//var gemclick = $('.allButtons').click;
					//var gemSingleValue = gemClick;
				

					$("#ruby").click(function(){
						 runTotal = ruby + emerald + yellow + diamond
						 document.getElementById('answer').innerHTML = runTotal;
						 console.log(ruby); 
					 });	 

					$("#diamond").click(function(){
						runTotal = diamond + emerald + yellow + ruby
						document.getElementById('answer').innerHTML = runTotal;
						console.log(diamond);
					});

					$("#yellow").click(function(){
						runTotal = yellow //+ diamond + emerald + ruby
						document.getElementById('answer').innerHTML = runTotal;
						console.log(yellow);
					});


					$("#emerald").click(function(){
						runTotal = emerald //+ ruby + yellow + diamond
						document.getElementById('answer').innerHTML = runTotal;
						console.log(emerald);
						 
						// if(runTotal = gameGuess){
						//  	runTotal = runTotal 
						//  	  
						// }
						// else if(runTotal === gameGuess){
						// 	runTotal = runTotal + " you win"
						// 	document.getElementById('answer').innerHTML = runTotal;
						// }
						// else(runTotal = runTotal + " You lose")
						// 	document.getElementById('answer').innerHTML = runTotal;
					 });
		});			
					
		// 			if (runTotal < gameGuess){
		// 				runTotal = runTotal + gemClick;
		// 				document.getElementById('answer').innerHTML = runTotal;
		// 				console.log(runTotal + " total");  
		// 			}
		// 			else if(runTotal === gameGuess){
		// 				runTotal = runTotal + " You Win";
		// 				document.getElementById('answer').innerHTML = runTotal;
		// //NOTE: log wins wins++
		// 				console.log(runTotal);
		// 			}
		// 			else{
		// 				runTotal = runTotal + " You lose!";
		// 				document.getElementById('answer').innerHTML = runTotal;
		// //NOTE: log losses loss++				
		// 				console.log(runTotal);
		// 			}
			//});

// 	    });
// 			//runTotal++;
// 			//document.getElementById('answer').innerHTML = runTotal;
// 			//console.log(gemClick);

 //};	 



