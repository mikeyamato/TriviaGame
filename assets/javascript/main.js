var countdown = 31;
var countdown24 = 22;
var intervalId;
var twentyFourIntervalId;
var questionCount = 1;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var clicked = false;
var sound;
var questionArr = [
	{
		question: "What is the primary chemical difference between Indica and Sativa?",
		answer: [
			"THC vs. CBD chemical composition",
			"Ruderalis vs. Cannabacaea chemical composition",
			"Indica has no THC content",
		],
		explanation: "Cannabis Sativa has a high concentration of THC, resulting in a euphoric high, while Cannabis Indica has a high concentration of CBD, resulting in a \"body buzz.\"",
	},
	{
		question: "What is the primary psychoactive substance found in marijuana?",
		answer: [
			"Tetrahydrocodeine",
			"Non-Oxynol-9 NO9",
			"Delta(9)-Tetrahydrocannabinol",
		],
		explanation: "THC is the primary-but not the only-psychoactive ingredient in marijuana. The full name of this chemical is Delta(9)-Tetrahydrocannabinol.",
	},
	// {
	// 	question: "Where did the cannabis plant originate?",
	// 	answer: [
	// 		"Africa",
	// 		"Equatorial South America",
	// 		"Asia",
	// 	],
	// 	explanation: "Cannabis originated in ancient Asia, probably near the Himalayas and almost certainly in parts of India. Because both C. Sativa and C. Indica are essentially strains of the same plant, they share the same origins.",
	// },
	// {
	// 	question: "Is it Legal to Use/Possess Marijuana in Jamaica for recreational purposes?",
	// 	answer: [
	// 		"No – Marijuana is NOT legal",
	// 		"Yes – Marijuana is Legal",
	// 		"It is Legal in Some Areas of the Country",
	// 	],
	// 	explanation: "It is ILLEGAL to use, possess, buy, sell or transport marijuana in Jamaica, according to the U.S. Department of State.",
	// },
	// {
	// 	question: "Is it possible to fatally overdose on marijuana?",
	// 	answer: [
	// 		"Yes, overdose is possible on marijuana",
	// 		"No, a marijuana overdose is not possible",
	// 		"Yes, but only when mixed with other substances",
	// 	],
	// 	explanation: "It is not possible to fatally overdose on marijuana. There has never been a documented case of a fatal marijuana overdose, and in fact there is no true definition of what constitutes a marijuana overdose simply because the consequences are generally not severe. For instance, consuming too much marijuana may make a person anxious or paranoid, but it would be difficult to argue that just because they experienced a negative symptom, that they had \“overdosed\” in the classic sense of the term. Consider a heroin, cocaine or meth overdose; the subject often becomes catatonic and without emergency life saving measures may die or suffer brain damage. This is not a concern with marijuana use.",
	// }

];
var answersArr = [
	"THC vs. CBD chemical composition", 
	"Delta(9)-Tetrahydrocannabinol",
	"Asia",
	"No – Marijuana is NOT legal",
	"No, a marijuana overdose is not possible",
];


// $(".title").html("Test your knowledge about how much you know about cannabis...weed, marijuana, trees, mota, ganja, wacky tobaccy, grass, pot, herb, reefer, dutchie, green crack, Mary Jane, Devil's lettuce, Hungarian hummus.");  // why isn't this showing? 


// this starts the timer function & quiz function once the button is clicked
	$("#myButton").on("click", function(){
		timer(); 
		$("#myButton").css("display","none");
		quiz();
	});

// quiz questions

	function quiz() {
		$(".title").html(questionArr[questionCount].question);
		$(".answer1").html(questionArr[questionCount].answer[0]).css("cursor", "pointer").click(function(){
			answerChoices();
			stop();
			stop24();
			sound.pause();  // works if sound is playing otherwise error
			// countdown = 31;
			// countdown24 = 22;
		});
		$(".answer2").html(questionArr[questionCount].answer[1]).css("cursor", "pointer").click(function(){
			answerChoices();
			stop();
			stop24();
			sound.pause();
			// countdown = 31;
			// countdown24 = 22;
		});
		$(".answer3").html(questionArr[questionCount].answer[2]).css("cursor", "pointer").click(function(){
			answerChoices();
			stop();
			stop24();
			sound.pause();
			// countdown = 31;
			// countdown24 = 22;
		});

	}

		
	// by clicking an answer one of many outcomes

	function answerChoices() {
		if($(".answerChoices").click() === $.inArray(answersArr) && questionCount === questionArr.length) {  // click + correct + no more questions
			questionCount++;
			correct++;
			stop();
			stop24();
			setTimeout(end, 4000);
			countdown = 31;
			countdown24 = 22;
			questionCount = 0;
			$(".answer1").css("cursor", "default");
			$(".answer2").css("cursor", "default");
			$(".answer3").css("cursor", "default");
			$(".answer1").html("Correct!");
			$(".answer2").html("<br>");
			$(".answer3").html(questionArr[questionCount-1].explanation);
			$(".show-timer").html(" ");
		} else if($(".answerChoices").click() !== $.inArray(answersArr) && questionCount === questionArr.length) {  // click + incorrect + no more questions
			questionCount++;
			incorrect++;
			stop();
			stop24();
			setTimeout(end, 4000);
			countdown = 31;
			countdown24 = 22;
			questionCount = 0;
			$(".answer1").css("cursor", "default");
			$(".answer2").css("cursor", "default");
			$(".answer3").css("cursor", "default");
			$(".answer1").html("Incorrect!");
			$(".answer2").html("<br>");
			$(".answer3").html(questionArr[questionCount-1].explanation);
			$(".show-timer").html(" ");
		} else if($(".answerChoices").click() === $.inArray(answersArr) && questionCount !== questionArr.length) {  // click + correct + more questions
			questionCount++;
			correct++;  
			stop();
			stop24();
			setTimeout(timerPlusQuiz, 4000);
			$(".answer1").css("cursor", "default");
			$(".answer2").css("cursor", "default");
			$(".answer3").css("cursor", "default");
			$(".answer1").html("Correct!");
			$(".answer2").html("<br>");
			$(".answer3").html(questionArr[questionCount-1].explanation);
			$(".show-timer").html(" ");
		} else if($(".answerChoices").click() !== $.inArray(answersArr) && questionCount !== questionArr.length) {  // click + incorrect + more questions
			questionCount++;
			incorrect++;  
			stop();
			stop24();
			setTimeout(timerPlusQuiz, 4000);
			$(".answer1").css("cursor", "default");
			$(".answer2").css("cursor", "default");
			$(".answer3").css("cursor", "default");
			$(".answer1").html("Incorrect!");
			$(".answer2").html("<br>");
			$(".answer3").html(questionArr[questionCount-1].explanation);
			$(".show-timer").html(" ");
		} else if ($(".answerChoices").click() !== $.inArray(answersArr) && questionCount === questionArr.length) {  // no click + incorrect + no more questions
			questionCount++;
			unanswered++;  
			stop();
			stop24();
			setTimeout(end, 4000);
			countdown = 31;
			countdown24 = 22;
			questionCount = 0;
			$(".answer1").css("cursor", "default");
			$(".answer2").css("cursor", "default");
			$(".answer3").css("cursor", "default");
			$(".answer1").html("Incorrect!");
			$(".answer2").html("<br>");
			$(".answer3").html(questionArr[questionCount-1].explanation);
			$(".show-timer").html(" ");
		} else if ($(".answerChoices").click() !== $.inArray(answersArr) && questionCount !== questionArr.length) {  // no click + incorrect + more questions 
			questionCount++;
			unanswered++; 
			stop();
			stop24();
			setTimeout(timerPlusQuiz, 4000);
			$(".answer1").css("cursor", "default");
			$(".answer2").css("cursor", "default");
			$(".answer3").css("cursor", "default");
			$(".answer1").html("Incorrect!");
			$(".answer2").html("<br>");
			$(".answer3").html(questionArr[questionCount-1].explanation);
			$(".show-timer").html(" ");
		}
	}

		

// this sets the count down to be every second and calls the decrement & decrement24 functions
	function timer() {
		intervalId = setInterval(decrement, 1000);   // is the intervalId variable necessary? 
		twentyFourIntervalId = setInterval(decrement24, 1000);
	};

// counts the seconds down, displays time, stops & resets the clock, and calls on the nextQuiz function
	function decrement() {
		countdown--;
		$(".show-timer").html(countdown);

		if(countdown === -1) {
			stop();
			countdown = 31;
			answerChoices();

		};

	};

	// plays countdown sound clip
	function decrement24() {
		countdown24--;
		if(countdown24 === -1) {
			sound = new Audio("assets/audio/24 - Clock Effect.mp3");
			sound.play();
			stop24();
			countdown24 = 22;
			// need a stop function in case someone answers
		}
	}

	// stops the countdown clock. w/o it, clock would go negative
	function stop() {
		clearInterval(intervalId);
	}

	function stop24() {
		clearInterval(twentyFourIntervalId);
	}


// starts a new question
	function timerPlusQuiz() {
		timer();
		quiz();
	}

// ends the game and displays correct, incorrect, and unanswered plus option to redo
	function end() {
		stop();  
		stop24();  
		$(".title").html("Thanks for playing!");
		$(".answer1").html("You got " + correct + " questions correct.");
		$(".answer2").html("You got " + incorrect + " questions incorrect.");
		$(".answer3").html("You didn't answer " + unanswered + " question(s).");
		$(".show-timer").html(" "); 
		// this restarts the quiz by clicking the button
		$("#redoButton").css("display","unset");
		$("#redoButton").on("click", function(){
		// $(".show-timer").css("display", "unset");
			$("#redoButton").css("display","none");
			timer();
			quiz();
			correct = 0;
			incorrect = 0;
			unanswered = 0;
		});
	};

















/* 
look into this for shuffling 
https://stackoverflow.com/questions/22716972/shuffle-object-array-while-preserving-keys

https://git.daplie.com/Daplie/knuth-shuffle
*/
