const quizData = [
    {
        question: "What is the main goal of SDG 3?",
        options: [
            "To promote economic growth",
            "To ensure healthy lives and well-being for all",
            "To increase technological advancements",
            "To create more urban infrastructure"
        ],
        correct: 1
    },
    {
        question: "Which of the following is an example of disease prevention?",
        options: [
            "Using antibiotics for every illness",
            "Getting vaccinated before exposure to a disease",
            "Relying on herbal remedies after getting sick",
            "Avoiding the doctor unless symptoms are serious"
        ],
        correct: 1
    },
    {
        question: "What is a common factor that negatively impacts mental well-being?",
        options: [
            "Eating a balanced diet",
            "Getting regular exercise",
            "Experiencing prolonged social isolation",
            "Practicing mindfulness"
        ],
        correct: 2
    },
    {
        question: "Which of the following is a major challenge in global healthcare access?",
        options: [
            "Too many doctors in rural areas",
            "High costs and lack of facilities",
            "Low demand for healthcare services",
            "Overuse of telemedicine"
        ],
        correct: 1
    },
    {
        question: "Which practice best supports global sanitation and hygiene efforts?",
        options: [
            "Encouraging proper waste disposal and clean water access",
            "Promoting the use of untreated natural water sources",
            "Discouraging vaccinations and medicine use",
            "Relying on traditional healing methods alone"
        ],
        correct: 0
    }
];

let shuffledQuestions = []; 
let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-btn");
const restartButton = document.getElementById("restart-btn");
const resultContainer = document.getElementById("result");

function shuffleQuestions() {
    shuffledQuestions = [...quizData].sort(() => Math.random() - 0.5);
}

function loadQuestion() {
    if (currentQuestion >= shuffledQuestions.length) {
        resultContainer.innerHTML = `<h2>You scored ${score} out of ${shuffledQuestions.length}!</h2>`;
        nextButton.style.display = "none";
        restartButton.style.display = "block";
        return;
    }

    const q = shuffledQuestions[currentQuestion];
    questionElement.innerText = q.question;
    optionsElement.innerHTML = "";

    q.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.classList.add("option-btn");
        button.onclick = () => checkAnswer(index);
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    const correctIndex = shuffledQuestions[currentQuestion].correct;
    const buttons = document.querySelectorAll(".option-btn");

    buttons[correctIndex].classList.add("correct");
    if (selectedIndex !== correctIndex) {
        buttons[selectedIndex].classList.add("wrong");
    } else {
        score++;
    }

    buttons.forEach(btn => btn.disabled = true);
}

nextButton.addEventListener("click", () => {
    currentQuestion++;
    loadQuestion();
});

restartButton.addEventListener("click", () => {
    currentQuestion = 0;
    score = 0;
    shuffleQuestions();
    nextButton.style.display = "block";
    restartButton.style.display = "none";
    resultContainer.innerHTML = "";
    loadQuestion();
});

shuffleQuestions();
loadQuestion();



