"use strict";

//All Questions Object
const question = [
  {
    number: 1,
    text: `What is a string in JavaScript？"`,
    ans1: `(a) a string that
      you can tie your notes to`,
    ans2: `(b) a string that
      you can pluck and create musical soun`,
    ans3: `(c) JavaScript
      strings are used for storing and manipulating text`
  },

  {
    number: 2,
    text: `What does JavaScript?`,
    ans1: `(a) an
    object-oriented computer programming language commonly used to create
    interactive effects within web browsers`,
    ans2: `(b) It is an
    extension of another programming langauge called "Java"`,
    ans3: `(c) It's a type of
    coffee brewery scripting art using Java beans`
  },

  {
    number: 3,
    text: `JavaScript can only be used on the frontend`,
    ans1: `(a) True`,
    ans2: `(b) False`,
    ans3: `(c) You can do whatever you want with Javacript, like build complex desktop app`
  },
  {
    number: 4,
    text: `The name JavaScript is borrowed from another programming language
    "Java"`,
    ans1: `(a) True`,
    ans2: `(b) False`,
    ans3: `(c) Yes, someone felt down from a tree and a Java bean hit their head and they saw "script" in the clouds`
  },
  {
    number: 5,
    text: `You cannot become a Web Developer just with JavaScript`,
    ans1: `(a) True`,
    ans2: `(b) False`,
    ans3: `(c) You need a 4 year undergrad degree, 2 year masters, and 5 year PHD to become a web developer`
  }
];

//All Answers Object
const ANSWERS = [
  `(c) JavaScript
  strings are used for storing and manipulating text`,
  `(a) an
  object-oriented computer programming language commonly used to create
  interactive effects within web browsers`,
  `(b) False`,
  `(b) False`,
  `(b) False`
];

//Global Variable declarations
let questionNum = 1;
let correctAnswers = 0;

//Question Templates
function questionTemplate(correctAnswers, question, questionsAnswered) {
  return `
      <section id="quiz-app" role="main">
    <div class ="question-title">
      <h2 id="question">${question.text}</h2>
     </div> 
      <form>
        <fieldset>
          <label>
            <input class="answer" type="radio" name="option" checked></input>
            <span>${question.ans1}</span>
          </label>
    
          <label>
            <input class="answer" type="radio" name="option"></input>
            <span>${question.ans2}</span>
          </label>
    
          <label>
            <input class="answer" type="radio" name="option"></input>
            <span>${question.ans3}</span>
          </label>
        </fieldset>  
        <button id="js-submit-button">Submit</button>
      </form>
      <div id="status-bar">
      <span id="question-count">Question: ${question.number}/10</span>
      <span id="score-count">Score: ${correctAnswers}/${questionsAnswered}</span>
      </div> 
    </section>
    `;
}

//Start Button function
function startButton() {
  $("#js-start-button").click(function(event) {
    nextQuestion();
  });
}

//Next Question button function
function nextButton() {
  $('#container').on('click', '#js-next-button', function(event) {
    if(questionNum === 5) {
      resultsPage(correctAnswers);
    } else {
      iterateQuestion();
      nextQuestion();
  }
  });
}

//Submit Button function
function submitButton() {
    $('#start-page).on('click', '#js-submit-button', function(event) {
      event.preventDefault()
      const answer = $('input:checked').siblings('span');
      const userIsCorrect = checkAnswer(answer);
      if(userIsCorrect) {
        rightFeedback();
      } else {
        wrongFeedback();
      }
    });
}

//Restart Button Function
function restartButton() {
    $('#start-page').on('click', '#js-restart-button', function(event) {
      questionNum = 1;
      correctAnswers = 0;
      //Recursion to call nextQuestion method
      nextQuestion();
    });
  }

//Next Question Render Function
function nextQuestion() {
    const question = questionSet[questionNum - 1];
    const questionsAnswered = questionNum - 1;
    $("#start-page").html(
      questionTemplate(correctAnswers, question, questionsAnswered)
    );
  }

//Iterate through questions function
function iterateQuestion() {
  questionNum++;
}

//Iterate through correct answers
function iterateCorrectAnswers() {
  correctAnswers++;
}

//Check if its the right answer
function userAnswer(answer) {
    if(answer.text() === ANSWERS[questionNum - 1]) {
      return true;
    } else {
      return false;
    }
  }

//Generate correct answer feedback
function rightFeedback() {
    $('#container').html(correctFeedback);
    iterateCorrectAnswers();
  }
  
//Correct answer feedback UI template
const correctFeedback = `
    <section class="feedback-page" role="main">
      <h2>Correct!</h2>
      <img src="https://media.giphy.com/media/3o7absbD7PbTFQa0c8/giphy.gif" alt="Spongebod thumbs up">
      <button id="js-next-button">Next</button>
    </section>
  `;

//Wrong answer feedback html
function wrongFeedback() {
    $('#container').html(wrongTemplate(questionNum));
  }

//Wrong answer feedback UI template
function wrongTemplate(questionNum) {
    return `
      <section class="feedback-page" role="main">
        <h2>Sorry, wrong answer! It was ${ANSWERS[questionNum - 1]}!</h2>
        <img src=https://media.giphy.com/media/hPPx8yk3Bmqys/giphy.gif" alt="Trump Wrong">
        <button id="js-next-button">Next</button>
      </section>
  `;
  }


//Results page UI template
function createResultsPage(correctAnswers) {
    $('#start-page').html(`
      <section id="final-page">
        <h2>Final Score: ${correctAnswers} out of 5</h2>
        <button id="js-restart-button">Play Again?</button>
      </section>
    `);
  }

//Function to handle button clicks (Recursion)
function handleButtons() {
    startButton();
    submitButton();
    nextButton();
    restartButton();
  }
  

//Call actionButton function
handleButtons();