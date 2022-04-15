import { db } from "./firestore.js";
import {
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js";

const getData = await getDocs(collection(db, "questions"));

function createQuestionsArray() {
  let questions = [];
  getData.forEach((doc) => {
    questions.push({
      question: doc.data().question,
      answer1: doc.data().answer1,
      answer2: doc.data().answer2,
      answer3: doc.data().answer3,
      answer4: doc.data().answer4,
      correctAnswer: doc.data().correctAnswer,
    });
  });
  return questions;
}

// Get DOM Elements
const question = document.getElementById("question");
const answers = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progress-text");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progress-bar-full");

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

// CONSTANTS
const CORRECT_BONUS = 1;
const MAX_QUESTIONS = 30;

let questions = createQuestionsArray();

function startGame() {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  getNewQuestion();
}

function getNewQuestion() {

  if(availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    // Game over!
    localStorage.setItem("mostRecentScore", score);
    return window.location.assign("/gameover.html");
  }

  questionCounter += 1;
  progressText.textContent = `Question ${questionCounter}/${MAX_QUESTIONS}`;

  // Update the progress bar
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.textContent = currentQuestion.question;

  answers.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.textContent = currentQuestion[`answer${number}`];
  });

  availableQuestions.splice(questionIndex, 1);
  acceptingAnswers = true;
}

answers.forEach((answer) => {
  answer.addEventListener("click", (e) => {
    if(!acceptingAnswers) return;

    acceptingAnswers = false;

    const selectedAnswer = e.target;
    const selectedChoice = selectedAnswer.dataset["number"];

    const classToApply = selectedChoice === currentQuestion.correctAnswer ? "correct" : "incorrect";
    if(classToApply === "correct") {
      incrementScore(CORRECT_BONUS);
    }

    selectedAnswer.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedAnswer.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

function incrementScore(number) {
  score += number;
  scoreText.textContent = score;
}

startGame();

// Export functions for global access
export {  };