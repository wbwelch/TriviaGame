// JavaScript Document
$(document).ready(function() {
	var welcome = $("#welcome-screen")
	var gameOver = $("#result-screen")
	var game = $("#game-screen")
	
	var correct = $("#correct-answers")
	var incorrect = $("#incorrect-answers")
	var unanswered = $("#unanswered")
	
	var playerInteract = {
		correctAnswers: 0,
		incorrectAnswers: 0,
		unanswered: 8,
		seconds: 90,
		//done: false,
		
		welcome: function() {
			gameOver.toggle();
			game.hide();
		},
		
		initiate: function() {
			welcome.hide();
			game.show();
			playerInteract.timer();
		},
		
		timer: function() {
			var windowTimeout = setTimeout(function() {
				//playerInteract.gameOver() 
				game.hide()
				gameOver.show()
				playerInteract.answerCheck()
				playerInteract.scoreCount()
				},	90000);
		
			var intervalVariable = setInterval(playerInteract.decrement, 1000);
			var seconds = playerInteract.seconds;
			
		},
				
		decrement: function () {
			if (playerInteract.seconds >= 2) {
					playerInteract.seconds--;
					console.log("seconds: " + playerInteract.seconds);
					$("#countdown").text(playerInteract.seconds);
				}
			
			
		},
			
		answerCheck: function() {
			if ($("#correct1").is(':checked')) {
				//$("#result-screen").show();
				++playerInteract.correctAnswers;
				--playerInteract.unanswered;
				playerInteract.scoreCount;
				console.log("1. " + playerInteract.correctAnswers);
				console.log("1. " + playerInteract.incorrectAnswers);
				console.log("1. " + playerInteract.unanswered);
			} 
			else if ($("#wrongA").is(':checked') || $("#wrongB").is(':checked')  || $("#wrongC").is(':checked')) {
				//$("#result-screen").show();
				++playerInteract.incorrectAnswers;
				--playerInteract.unanswered;
				console.log("1. " + playerInteract.correctAnswers);
				console.log("1. " + playerInteract.incorrectAnswers);
				console.log("1. " + playerInteract.unanswered);
			};
			if ($("#correct2").is(':checked')) {
				//$("#result-screen").show();
				++playerInteract.correctAnswers;
				--playerInteract.unanswered;
				console.log("2. " + playerInteract.correctAnswers);
				console.log("2. " + playerInteract.incorrectAnswers);
				console.log("2. " + playerInteract.unanswered);
			} 
			else if ($("#wrongD").is(':checked') || $("#wrongE").is(':checked')  || $("#wrongF").is(':checked')) {
				//$("#result-screen").show();
				++playerInteract.incorrectAnswers;
				--playerInteract.unanswered;
				console.log("2. " + playerInteract.correctAnswers);
				console.log("2. " + playerInteract.incorrectAnswers);
				console.log("2. " + playerInteract.unanswered);
			};
			if ($("#correct3").is(':checked')) {
				//$("#result-screen").show();
				++playerInteract.correctAnswers;
				--playerInteract.unanswered;
				console.log("3. " + playerInteract.correctAnswers);
				console.log("3. " + playerInteract.incorrectAnswers);
				console.log("3. " + playerInteract.unanswered);
			} 
			else if ($("#wrongG").is(':checked')) {
				//$("#result-screen").show();
				++playerInteract.incorrectAnswers;
				--playerInteract.unanswered;
				console.log("3. " + playerInteract.correctAnswers);
				console.log("3. " + playerInteract.incorrectAnswers);
				console.log("3. " + playerInteract.unanswered);
			};
			if ($("#correct4").is(':checked')) {
				//$("#result-screen").show();
				++playerInteract.correctAnswers;
				--playerInteract.unanswered;
				console.log("4. " + playerInteract.correctAnswers);
				console.log("4. " + playerInteract.incorrectAnswers);
				console.log("4. " + playerInteract.unanswered);
			} 
			else if ($("#wrongH").is(':checked') || $("#wrongI").is(':checked')  || $("#wrongJ").is(':checked')) {
				//$("#result-screen").show();
				++playerInteract.incorrectAnswers;
				--playerInteract.unanswered;
				console.log("4. " + playerInteract.correctAnswers);
				console.log("4. " + playerInteract.incorrectAnswers);
				console.log("4. " + playerInteract.unanswered);
			};
			if ($("#correct5").is(':checked')) {
				//$("#result-screen").show();
				++playerInteract.correctAnswers;
				--playerInteract.unanswered;
				console.log("5. " + playerInteract.correctAnswers);
				console.log("5. " + playerInteract.incorrectAnswers);
				console.log("5. " + playerInteract.unanswered);
			} 
			else if ($("#wrongK").is(':checked')) {
				//$("#result-screen").show();
				++playerInteract.incorrectAnswers;
				--playerInteract.unanswered;
				console.log("5. " + playerInteract.correctAnswers);
				console.log("5. " + playerInteract.incorrectAnswers);
				console.log("5. " + playerInteract.unanswered);
			};
			if ($("#correct6").is(':checked')) {
				//$("#result-screen").show();
				++playerInteract.correctAnswers;
				--playerInteract.unanswered;
				console.log("6. " + playerInteract.correctAnswers);
				console.log("6. " + playerInteract.incorrectAnswers);
				console.log("6. " + playerInteract.unanswered);
			} 
			else if ($("#wrongL").is(':checked') || $("#wrongM").is(':checked')  || $("#wrongN").is(':checked')) {
				//$("#result-screen").show();
				++playerInteract.incorrectAnswers;
				--playerInteract.unanswered;
				console.log("6. " + playerInteract.correctAnswers);
				console.log("6. " + playerInteract.incorrectAnswers);
				console.log("6. " + playerInteract.unanswered);
			};
			if ($("#correct7").is(':checked')) {
				//$("#result-screen").show();
				++playerInteract.correctAnswers;
				--playerInteract.unanswered;
				console.log("7. " + playerInteract.correctAnswers);
				console.log("7. " + playerInteract.incorrectAnswers);
				console.log("7. " + playerInteract.unanswered);
			} 
			else if ($("#wrongO").is(':checked') || $("#wrongP").is(':checked')  || $("#wrongQ").is(':checked')) {
				//$("#result-screen").show();
				++playerInteract.incorrectAnswers;
				--playerInteract.unanswered;
				console.log("7. " + playerInteract.correctAnswers);
				console.log("7. " + playerInteract.incorrectAnswers);
				console.log("7. " + playerInteract.unanswered);
			};
			if ($("#correct8").is(':checked')) {
				//$("#result-screen").show();
				++playerInteract.correctAnswers;
				--playerInteract.unanswered;
				console.log("8. " + playerInteract.correctAnswers);
				console.log("8. " + playerInteract.incorrectAnswers);
				console.log("8. " + playerInteract.unanswered);
			} 
			else if ($("#wrongR").is(':checked')) {
				//$("#result-screen").show();
				++playerInteract.incorrectAnswers;
				--playerInteract.unanswered;
				console.log("8. " + playerInteract.correctAnswers);
				console.log("8. " + playerInteract.incorrectAnswers);
				console.log("8. " + playerInteract.unanswered);
			};
		},
		
	scoreCount: function() {
		$("#correct-answers").text(playerInteract.correctAnswers);
		$("#incorrect-answers").html(playerInteract.incorrectAnswers);
		$("#unanswered").html(playerInteract.unanswered);
	} 
	
	};
		
	 window.onload = playerInteract.welcome;
	
	//on-click initiate game and timer
	$("#start-button").on("click", function(event) {
	 	//event.preventDefault()
		playerInteract.initiate()
	});
	
	
	//initially write second to screen
	$("#countdown").text(playerInteract.seconds); 


	

	
}); //end of ready function