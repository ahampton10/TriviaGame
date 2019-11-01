var time = 20;
var intervalId = "";
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var arrayFinder = 0;


var question01 = {
    question: "What does a Mirepoix consist of?", 
    answers: ["Celery, onion, and carrot", "Celery, shallot, and carrot", "Onion, carrot, and mushroom", "Shallot, onion, and celery"], 
    values: ["correct", "incorrect", "incorrect", "incorrect"], 
    correct: "Celery, onion, and carrot", 
    image: "./assets/images/mirepoix.jpeg"
}; 
var question02 = {
    question: "Which of the following represents an emulsion?", 
    answers: ["Honey", "Mayonnaise", "Olive Oil", "Avocado Toast"], 
    values: ["incorrect", "correct", "incorrect", "incorrect"], 
    correct: "Mayonnaise", 
    image: "./assets/images/mayonnaise.jpg"
}; 
var question03 = {
    question: "What is meant by 'al dente'?", 
    answers: ["Overcooked pasta", "Pasta that is cooked until just done", "Pasta that is slightly undercooked", "Uncooked pasta"], 
    values: ["incorrect", "incorrect", "correct", "incorrect"], 
    correct: "Pasta that is slightly undercooked", 
    image: "./assets/images/pasta.jpg"
}; 
var question04 = {
    question: "A Filet Mignon comes from...", 
    answers: ["The tenderloin section of a cow", "The hind section of a pig", "The tenderloin section of a pig", "The round section of a cow"], 
    values: ["correct", "incorrect", "incorrect", "incorrect"], 
    correct: "The tenderloin section of a cow", 
    image: "./assets/images/cow-cutout.png"
}; 
var question05 = {
    question: "What do julienne cuts look like?", 
    answers: ["Medallions", "Dice", "Matchsticks", "Shreds"], 
    values: ["incorrect", "incorrect", "correct", "incorrect"], 
    correct: "Matchsticks", 
    image: "./assets/images/julienne.jpg"
}; 
var question06 = {
    question: "Which famous chef said 'People who love to eat are always the best people'?", 
    answers: ["Anthony Bourdain", "Julia Child", "Guy Fierri", "Paul Prudhomme"], 
    values: ["incorrect", "correct", "incorrect", "incorrect"], 
    correct: "Julia Child", 
    image: "./assets/images/julia.jpg"
}; 
var question07 = {
    question: "What are the basic ingredients in a Hollandaise sauce?", 
    answers: ["Egg yolks, butter, and lemon zest", "Egg yolks and butter", "Flour and butter", "Lemon zest, eggs, and butter"], 
    values: ["correct", "incorrect", "incorrect", "incorrect"], 
    correct: "Egg yolks, butter, and lemon zest", 
    image: "./assets/images/hollandaise.jpg"
}; 
var question08 = {
    question: "Where was the french fry invented?", 
    answers: ["France", "United States", "Belgium", "Germany"], 
    values: ["incorrect", "incorrect", "correct", "incorrect"], 
    correct: "Belgium", 
    image: "./assets/images/belgium.jpg"
}; 
var question09 = {
    question: "An eggplant is a...", 
    answers: ["Tuber", "Vegetable", "Root", "Fruit"], 
    values: ["incorrect", "incorrect", "incorrect", "correct"], 
    correct: "Fruit", 
    image: "./assets/images/eggplant-cutout.png"
}; 
var question10 = {
    question: "How many teaspoons are in a tablespoon?", 
    answers: ["4", "3", "5", "6"], 
    values: ["incorrect", "correct", "incorrect", "incorrect"], 
    correct: "3", 
    image: "./assets/images/tablespoon-cutout.png"
}; 


var questionsArray = [question01, question02, question03, question04, question05, question06, question07, question08, question09, question10];


	function start () {
		$(".content-div").empty();
		var startButton = $("<button>");
		startButton.text("Start");
		startButton.addClass("start btn btn-default answerBtn");
		$(".content-div").append(startButton);
	};

	function run() {
      intervalId = setInterval(decrement, 1000);
    };

    function decrement() {
      time--;
      $(".timer-div").html("Time Remaining: " + time + " Seconds");
      if (time == 0) {
        if (arrayFinder < questionsArray.length-1) {
        	setTimeout(function () {questionWrite(questionsArray[arrayFinder])}, 2000);
        	solutionWrite(questionsArray[arrayFinder]);
	    	$(".question-div").html("Time is Up!");
        	stop();
        	unanswered++;
      	}
      	else if (arrayFinder < questionsArray.length) {
      		setTimeout(function () {endWrite(questionsArray[arrayFinder])}, 2000);
      		solutionWrite(questionsArray[arrayFinder]);
	    	$(".question-div").html("Time is Up!");
        	stop();
        	unanswered++;
      	}
      };
    };

    function stop() {
      clearInterval(intervalId);
    };

	function questionWrite (obj) {
		time = 20;
		$(".timer-div").empty();
		$(".timer-div").html("Time Remaining: " + time + " Seconds");
		$(".question-div").empty();
		$(".content-div").empty();
		run ();
		$(".question-div").html(obj.question);
		for (var i = 0; i < obj.answers.length; i++) {
			var answerButton = $("<button>");
			answerButton.addClass("answer btn btn-default answerBtn");
			answerButton.text(obj.answers[i]);
			answerButton.attr("value", obj.values[i]);
			$(".content-div").append(answerButton);
			$(".content-div").append("<br>");
		};
	};

	function solutionWrite (obj) {
		$(".question-div").empty();
		$(".content-div").empty();
		$(".content-div").html("The correct answer is " + obj.correct + "<br>");
		var foodImage = $("<img>");
		foodImage.attr("height", "250");
	    foodImage.attr("src", obj.image);
		foodImage.addClass("character")
		$(".content-div").append(foodImage);
		arrayFinder++;
	};

	function startWrite () {
		questionWrite(question01);
	};

	function answerSelect () {
		stop();
		if ($(this).attr("value") == "correct") {
			solutionWrite(questionsArray[arrayFinder]);
			$(".question-div").html("YASS CHEF!");
			correct++;
			if (arrayFinder < questionsArray.length) {
				setTimeout(function () {questionWrite(questionsArray[arrayFinder])}, 2000);
			}
			else if (arrayFinder < questionsArray.length+1) {
		        setTimeout(function () {endWrite(questionsArray[arrayFinder])}, 2000);
      		}
		}
		else if ($(this).attr("value") == "incorrect") {
			solutionWrite(questionsArray[arrayFinder]);
			$(".question-div").html("NO! You are an Idiot Sandwhich");
			incorrect++;
			if (arrayFinder < questionsArray.length) {
				setTimeout(function () {questionWrite(questionsArray[arrayFinder])}, 2000);
			}
			else if (arrayFinder < questionsArray.length+1) {
		        setTimeout(function () {endWrite(questionsArray[arrayFinder])}, 2000);
      		}
		}
	};

	function endWrite () {
		$(".question-div").empty();
		$(".content-div").empty();
		$(".question-div").html("Your Score:");
		$(".content-div").html("<p> Correct: " + correct + "</p>" + "<p> Incorrect: " + incorrect + "</p>" + "<p> Unanswered: " + unanswered + "</p>");
		var resetButton = $("<button>");
		resetButton.addClass("reset btn btn-default answerBtn");
		resetButton.text("Start Over?");
		$(".content-div").append(resetButton);
	}

	function resetClick () {
		arrayFinder = 0;
		incorrect = 0;
		correct = 0;
		unanswered = 0;
		startWrite();
	}

	$(document).on("click", ".start", startWrite);

	$(document).on("click", ".answer", answerSelect);

	$(document).on("click", ".reset", resetClick);

start();