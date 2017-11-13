var questions = [
	{
		question: "what's 2 + 2?",
		answer: 4
	},
	{
		question: "What house was Harry Potter in?",
		answer: "gryffindor"
	},
	{
		question: "What's 10 / 5?",
		answer: 2
	},
	{
		question: "Finish this sentence: winter is ______?",
		answer: "coming"
	},
	{
		question: "Who is the youngest Lannister sibling",
		answer: "tyrion"
	},
	{
		question: "Where does Jorah Mormont's family live?",
		answer: "bear island"
	},
	{
		question: "How many dragons does Daenerys Targaryen have?",
		answer: 3
	},
	{
		question: "How many hands does Jaime Lannister have after book 3?",
		answer: 1
	},
	{
		question: "Did Tyrion commit regicide or patricide?",
		answer: "both"
	},
	{
		question: "How many Direwolves do the starks find?",
		answer: 6
	}
];




//loop through and display each question
for(var i = 0; i < questions.length; i++) {
	//store each question value
	var question = questions[i].question;
	//store aech elementto add question too
	var el = document.getElementById('question' + [i]);

	el.textContent = question;
}

function testResults() {
	var correct = 0;
	var incorrect = 0;

	for(var i = 0; i < questions.length; i++) {
		var answer = questions[i].answer;
		var guess = document.getElementById('answer' + [i]).value;
		var questionSpot = document.getElementById('question' + [i]);

		if(answer == guess) {
			questionSpot.classsName = 'correct';
			correct++;
		} else
			questionSpot.classNames = 'incorrect';
			incorrect++;
	};
	

	document.getElementById('correct').textContent = correct;
	document.getElementById('incorrect').textContent = incorrect;
}

