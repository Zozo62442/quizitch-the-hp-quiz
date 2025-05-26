const questionRef = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".choice-text"));
const progressText = document.querySelector("#progressText");
const scoreText = document.querySelector("#score");
const progressBarFull = document.querySelector("#progressBarFull");
const loader = document.querySelector('#loader');
const game = document.querySelector('#game');
const finalScore = document.querySelector('#finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const MAX_HIGH_SCORES = 100;
const MAX_QUESTIONS = 10;
const CORRECT_POINTS = 10;

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let questions = [];


const getMeMyQuestions => {
  fetch("assets/data/questions.json")
    .then((res) => return res.json())
    .then((loadedQuestions) => {
        questions = loadedQuestions;
        startGame();
    })

    .catch((err) => console.error("Failed to load questions:", err));
 }

const startGame = () => {
  getMeMyQuestions()
    questionCounter = 0;
    score = 0;
    availableQuesions = [...questions];
    getNewQuestion();
    game.classList.remove("hidden");
    loader.classList.add("hidden");
};


const getNewQuestion = () => {
  if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);
    return window.location.assign("end-game.html");
  }
  questionCounter++;
  progressText.innerHTML = questionCounter + "/" + MAX_QUESTIONS;
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  const questionIndex = Math.floor(Math.random() * availableQuesions.length);
  currentQuestion = availableQuesions[questionIndex];
  questionRef.innerHTML = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset.number;
    choice.innerHTML = currentQuestion["choice" + number];
  });

  availableQuesions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset.number;

    let classToApply = 'incorrect';
    if (selectedAnswer == currentQuestion.answer) {
        classToApply = 'correct';
    }
    if (classToApply === "correct") {
      incrementScore(CORRECT_POINTS);
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

incrementScore = num => {
  score += num;
  scoreText.innerHTML = score;
};

finalScore.innerHTML = mostRecentScore;