let currentQuestionIndex = 0;
let score = 0;
let questions = [];

const startScreen = document.getElementById('start-screen');
const quizContainer = document.getElementById('quiz-container');
const questionContainer = document.getElementById('question-container');
const scoreDisplay = document.getElementById('score-value');
const progressDisplay = document.getElementById('current');
const totalDisplay = document.getElementById('total');
const resultScreen = document.getElementById('result-screen');
const finalScore = document.getElementById('final-score');

document.getElementById('start-button').addEventListener('click', () => {
  startScreen.classList.add('hidden');
  quizContainer.classList.remove('hidden');
  fetchQuestions();
});

document.getElementById('restart-button').addEventListener('click', () => {
  resultScreen.classList.add('hidden');
  startScreen.classList.remove('hidden');
  currentQuestionIndex = 0;
  score = 0;
});

function fetchQuestions() {
  fetch('assets/data/questions.json') 
    .then(response => response.json())
    .then(data => {
      questions = shuffleArray(data);
      totalDisplay.textContent = questions.length;
      startQuiz();
    })
    .catch(error => console.error('Failed to load questions:', error));
}

function startQuiz() {
  showQuestion();
}

function showQuestion() {
  const questionObj = questions[currentQuestionIndex];
  questionContainer.innerHTML = '';
  questionContainer.classList.add('fade-in');

  const questionEl = document.createElement('h2');
  questionEl.textContent = questionObj.question;
  questionContainer.appendChild(questionEl);

  const shuffledOptions = shuffleArray([...questionObj.options]);

  shuffledOptions.forEach(option => {
    const btn = document.createElement('button');
    btn.textContent = option;
    btn.classList.add('option-button');
    btn.addEventListener('click', () => {
      if (option === questionObj.answer) {
        score++;
        scoreDisplay.textContent = score;
      }

      currentQuestionIndex++;
      progressDisplay.textContent = currentQuestionIndex + 1;

      if (currentQuestionIndex < questions.length) {
        showQuestion();
      } else {
        endQuiz();
      }
    });
    questionContainer.appendChild(btn);
  });
}

function endQuiz() {
  quizContainer.classList.add('hidden');
  resultScreen.classList.remove('hidden');
  finalScore.textContent = `You scored ${score} out of ${questions.length}!`;
}

// Shuffle function
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}