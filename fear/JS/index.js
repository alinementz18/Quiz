const questions = [
    {
        question: "What do you call a ghost's favorite dessert?",
        answers: ["I Scream", "Candy Corn", "Pumpkin Pie"],
        correct: 0
    },
    {
        question: "What do you call a witch at the beach?",
        answers: ["A sand-witch", "A broomstick", "A sea witch"],
        correct: 0
    },
    {
        question: "What is a vampire's favorite fruit?",
        answers: ["Blood Orange", "Tomato", "Apple"],
        correct: 0
    },
    {
        question: "What is a mummy's favorite type of music?",
        answers: ["Wrap music", "Pop", "Rock"],
        correct: 0
    },
    {
        question: "What kind of pants do ghosts wear?",
        answers: ["Boo jeans", "Sweatpants", "Shorts"],
        correct: 0
    },
    {
        question: "What do you call a monster who poisons corn?",
        answers: ["A ghoulish kernel", "A scarecrow", "A popcorn monster"],
        correct: 0
    },
    {
        question: "What do you call a witch's garage?",
        answers: ["A broom closet", "A witch hut", "A spooky shed"],
        correct: 0
    },
    {
        question: "Why don’t skeletons fight each other?",
        answers: ["They don’t have guts", "They are scared", "They are friends"],
        correct: 0
    },
    {
        question: "What do you call a haunted chicken?",
        answers: ["A poultrygeist", "A ghost chicken", "A spooky bird"],
        correct: 0
    },
    {
        question: "What is a vampire's favorite game?",
        answers: ["Hide and Seek", "Monopoly", "Blood Wars"],
        correct: 0
    }
];

let currentQuestionIndex = 0;
let score = 0; // Inicialize a pontuação

function displayQuestion() {
    const questionElement = document.getElementById('question');
    const answersElement = document.getElementById('answers');
    const resultElement = document.getElementById('result');
    const nextButton = document.getElementById('next');
    const scoreElement = document.getElementById('score');

    resultElement.textContent = '';
    nextButton.style.display = 'none';

    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    answersElement.innerHTML = '';

    scoreElement.textContent = `Score: ${score}`; // Atualize a exibição da pontuação

    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.className = 'answer-btn';
        button.textContent = answer;
        button.onclick = () => checkAnswer(index);
        answersElement.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    const resultElement = document.getElementById('result');
    const nextButton = document.getElementById('next');
    const scoreElement = document.getElementById('score');
    const currentQuestion = questions[currentQuestionIndex];
    const audio = document.getElementById("background-audio");
    const backButton = document.getElementById("back");
    const visivel = document.getElementById('visivel');
    const visivel2 = document.getElementById('visivel2');

    if (selectedIndex === currentQuestion.correct) {
        resultElement.textContent = "Correct!";
        score++; // Aumenta a pontuação
        scoreElement.textContent = `Score: ${score}`; // Atualize a exibição da pontuação
        backButton.style.display = "none";
    } else {
        resultElement.textContent = "Oops! Try again!";
        
        score = 0; // Zera a pontuação
        scoreElement.textContent = `Score: ${score}`; // Atualize a exibição da pontuação
        audio.volume = 1;
        audio.play();
        visivel.style.display = "none";
        document.documentElement.classList.add("visivel2");
        document.documentElement.classList.add("jumpscare");
        backButton.style.display = "block";
        return;
    }
    
    nextButton.style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        const questionElement = document.getElementById('question');
        const answersElement = document.getElementById('answers');
        const resultElement = document.getElementById('result');
        questionElement.textContent = "Quiz Completed!";
        answersElement.innerHTML = '';
        resultElement.textContent = '';
        document.getElementById('next').style.display = 'none';
    }
}

window.onload = displayQuestion;