"use strict";

//Global Variable declarations for initial question and initial correct answer points
let questionNum = 1;
let correctAnswers = 0;

/* Create arrays of questions and answers */

//All Questions Object
const createQuestionSet = [
  {
    number: 1,
    text: `Javascript is going to be an outdated technology, don't learn it`,
    ans1: `(a) True: Go is the new hype man! `,
    ans2: `(b) False: Jeff Atwood said "Any application that can be written in JavaScript, will eventually be written in JavaScript"`,
    ans3: `(c) Javascript is lame of course`
  },

  {
    number: 2,
    text: `JavaScript is the best language for data science?`,
    ans1: `(a) True: Dude, JavaScript can do anything`,
    ans2: `(b) False: Yes you can use JavaScript for data science, but Python is better designed for data science`,
    ans3: `(c) It's the best type of language to talk about
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
  `(b) False: Jeff Atwood said "Any application that can be written in JavaScript, will eventually be written in JavaScript"`,
  `(b) False: Yes you can use JavaScript for data science, but Python is better designed for data science`,
  `(b) False`,
  `(b) False`,
  `(b) False`
];

/* Create arrays of questions and answers */

/* Render the first question set*/

//Start Button function
function startButton() {
  $("#js-start-button").click(function(event) {
    nextQuestion();
  });
}

//Next Question Render Function
function nextQuestion() {
  const question = createQuestionSet[questionNum - 1];
  const questionsAnswered = questionNum - 1;
  $("#start-page").html(
    questionTemplate(correctAnswers, question, questionsAnswered)
  );
}

//Question Templates
function questionTemplate(correctAnswers, question, questionsAnswered) {
  return `
      <section id="quiz-app" role="main">
    <div id ="question-title">
      <h2 id="question">${question.text}</h2>
     </div> 
      <form id= "js-form">
        <fieldset>
        <br>
          <label>
            <input class="answer" type="radio" name="option" checked></input>
            <span>${question.ans1}</span>
          </label>
          <br>
          <label>
            <input class="answer" type="radio" name="option"></input>
            <span>${question.ans2}</span>
          </label>
          <br>
          <label>
            <input class="answer" type="radio" name="option"></input>
            <span>${question.ans3}</span>
          </label>
          <br>
        </fieldset>  
      </form>
      <button id="js-submit-button">Submit</button>
      <div id="status-bar">
      <span id="question-count">Question: ${question.number}/5</span> <br>
      <span id="score-count">Score: ${correctAnswers}/${questionsAnswered}</span>
      </div> 
    </section>
    `;
}

//Submit Button function
function submitButton() {
  $("#start-page").on("click", "#js-submit-button", function(event) {
    event.preventDefault();
    const answer = $("input:checked").siblings("span");
    const userIsCorrect = userAnswer(answer);
    if (userIsCorrect) {
      rightFeedback();
    } else {
      wrongFeedback();
    }
  });
}

//Next Question button function
function nextButton() {
  $("#start-page").on("click", "#js-next-button", function(event) {
    if (questionNum === 5) {
      resultsPage(correctAnswers);
    } else {
      iterateQuestion();
      nextQuestion();
    }
  });
}
/* Render the first question set*/

/* Question Logics & Rendering */

//Check if its the right answer
function userAnswer(answer) {
  if (answer.text() === ANSWERS[questionNum - 1]) {
    return true;
  } else {
    return false;
  }
}

//Generate correct answer feedback
function rightFeedback() {
  $("#start-page").html(correctFeedback);
  iterateCorrectAnswers();
}

//Correct answer feedback UI template
const correctFeedback = `
    <section id="feedback-page" role="main">
      <h2 >Correct! The right answer is: ${ANSWERS[questionNum - 1]}</h2>
      <img src="https://media.giphy.com/media/3o7absbD7PbTFQa0c8/giphy.gif" alt="Spongebod thumbs up">
    </section>
    <button id="js-next-button">Next</button>
  `;

//Wrong answer feedback html
function wrongFeedback() {
  $("#start-page").html(wrongTemplate(questionNum));
}

//Wrong answer feedback UI template
function wrongTemplate(questionNum) {
  return `
      <section id="feedback-page" role="main">
        <h2>Sorry, wrong answer! The right answer was ${
          ANSWERS[questionNum - 1]
        }!</h2>
        <img src="https://media.giphy.com/media/l4FGuhL4U2WyjdkaY/giphy.gif" alt="Trump Wrong">
      </section>
      <button id="js-next-button">Next</button>
  `;
}

//Iterate through questions function
function iterateQuestion() {
  questionNum++;
}

//Iterate through correct answers
function iterateCorrectAnswers() {
  correctAnswers++;
}

/* Question Logics & Rendering */

//Results page UI template
function resultsPage(correctAnswers) {
  $("#start-page").html(`
      <section id="final-page">
        <h2>Final Score: ${correctAnswers} out of 5</h2>
      </section>
      <button id="js-restart-button">Try Again?</button>
    `);
}

//Restart Button Function
function restartButton() {
  $("#start-page").on("click", "#js-restart-button", function(event) {
    questionNum = 1;
    correctAnswers = 0;
    //Recursion to call nextQuestion method
    nextQuestion();
  });
}

//Function to handle button clicks (Recursion)
function handleButtons() {
  startButton();
  submitButton();
  nextButton();
  restartButton();
}

//Call action button that sets all the other functions
handleButtons();
