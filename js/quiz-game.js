const question = document.querySelector(".question");
const answerBtn = document.querySelector(".options");
const nextBtn = document.querySelector(".next-btn");

const questions = [
  {
    question: "Who is the First Prime Minister of Pakistan?",
    answer: [
      { text: "Quaid e Azam", correct: false },
      { text: "Imran Khan", correct: false },
      { text: "Liaquat Ali Khan", correct: true },
      { text: "Allama Iqbal", correct: false },
    ],
  },
  {
    question: "Who is the Conqueror of sindh?",
    answer: [
      { text: "Sultan Mehmad", correct: false },
      { text: "Muhammad Bin Qasim", correct: true },
      { text: "Sultan Ahmed", correct: false },
      { text: "Tehrik", correct: false },
    ],
  },
  {
    question: "Who is The Conqueror of Qustuntunia?",
    answer: [
      { text: "Sultan Mehmad", correct: true },
      { text: "Sultan Murad", correct: false },
      { text: "Sultan Ahmed", correct: false },
      { text: "Sultan of Qustuntunia", correct: false },
    ],
  },
  {
    question: "Who is the First Sultan of Ottoman Empire?",
    answer: [
      { text: "Sultan Ertrugul", correct: false },
      { text: "Sultan Osman", correct: true },
      { text: "Sultan Murad", correct: false },
      { text: "Sultan Orhan", correct: false },
    ],
  },
  {
    question: "Who is Conqueror of Quds?",
    answer: [
      { text: "Sultan Mehmad", correct: false },
      { text: "Sultan Noor ud Din Zangi", correct: false },
      { text: "Sultan Sallahuddin Ayubi", correct: true },
      { text: "Sultan Abdul Hameed", correct: false },
    ],
  },
];

let index = 0;
let score = 0;

const startQuiz = () => {
  index = 0;
  score = 0;
  nextBtn.innerHTML = "Next";
  showQuestion();
};

const showQuestion = () => {
  resetQuestions();
  let currQuestion = questions[index];
  let questionNum = index + 1;
  question.innerText = `${questionNum}. ${currQuestion.question}`;

  currQuestion.answer.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("option");
    answerBtn.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    button.addEventListener("click", selectAnswer);
  });
};

const resetQuestions = () => {
  nextBtn.style.display = "none";
  while (answerBtn.firstChild) {
    answerBtn.removeChild(answerBtn.firstChild);
  }
  answerBtn.style.display = "block";
};

const selectAnswer = (e) => {
  let selectedBtn = e.target;
  let isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }

  Array.from(answerBtn.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
    button.style.cursor = "not-allowed";
  });
  nextBtn.style.display = "block";
};

const nextButton = () => {
  index++;
  if (index < questions.length) {
    showQuestion();
  } else {
    scoreCard();
  }
};

const scoreCard = () => {
  resetQuestions();

  if (score >= 3) {
    question.innerText = `Congratulations. You scored ${score} out of ${questions.length}`;
  } else{
    question.innerText = `Bad Performance! You scored ${score} out of ${questions.length}`;
  }

  nextBtn.innerText = "Try Again";
  nextBtn.style.display = "block";
  answerBtn.style.display = "none";
};

nextBtn.addEventListener("click", () => {
  if (index < questions.length) {
    nextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
