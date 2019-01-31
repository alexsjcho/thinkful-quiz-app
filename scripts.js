"use strict";

//All Questions Object
const questionSet = [
  {
    number: 1,
    text: `What is a string in JavaScript？"`,
    ans1: `(a) a string that
      you can tie your notes t`,
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
    ans2: `(b) False`
  },
  {
    number: 4,
    text: `The name JavaScript is borrowed from another programming language
    "Java"`,
    ans1: `(a) True`,
    ans2: `(b) False`
  },
  {
    number: 5,
    text: `You cannot become a Web Developer just with JavaScript`,
    ans1: `True`,
    ans2: `False`
  }
];

//All Answers Object

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

//Submit Button function

//Next Button function

//Restart Button Function

//Next Question Render Function

//Check if its the right answer

//Generate correct answer feedback

//Correct answer feedback UI

//Wrong answer feedback html

//Wrong answer feedback UI template

//Iterate through questions function

//Correct answer iteration function

//Function to handle button clicks (Recursion)

//Call actionButton function
