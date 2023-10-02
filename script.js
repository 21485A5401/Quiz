const questions = [
    {
        question: "The candidate from our constituency was attacked during his __________ for the MP elections.",
        options: ["canvas","canvass","canvus","canvaass"],
        correctAnswer: "canvass"
    },
    {
        question: "Select the option closest to the meaning of the idiom – Skeleton crew",
        options: ["A group of stupid people", "A group of highly skilled people", "Minimum number of people required to keep a job running", "A group of lazy people"],
        correctAnswer: "Minimum number of people required to keep a job running"
    },
    {
        question: "What is the value of limx–>0 (cos x – 1) / x",
        options: ["e", "0", "1", "None of These"],
        correctAnswer: "0"
    },
    {
        question: "Assuming a 16 – bit address space with 12 logical pages. What is the size of each page ?",
        options: ["1K", "2K", "4K", "None of These"],
        correctAnswer: "4K"
    },
    {
        question: "WWhich class of ports does the port number 48151 belongs?",
        options: ["The ‘well – known’ ports", "Registered ports", "Private ports", "Free ports"],
        correctAnswer: "Registered ports"
    }
    // Add more questions here
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const submitButton = document.getElementById('submit-btn');
const nextButton = document.getElementById('next-btn');
const resultElement = document.getElementById('result');
const scoreElement = document.getElementById('score');

function loadQuestion() {
    const current = questions[currentQuestion];
    questionElement.textContent = `Question ${currentQuestion + 1}: ${current.question}`;
    
    optionsElement.innerHTML = '';
    current.options.forEach((option, index) => {
        const label = document.createElement('label');
        label.innerHTML = `<input type="radio" name="answer" value="${option}"> ${option}`;
        optionsElement.appendChild(label);
    });

    submitButton.style.display = 'block';
    nextButton.style.display = 'none';
    resultElement.textContent = '';
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) {
        resultElement.textContent = 'Please select an answer.';
        return;
    }

    const userAnswer = selectedOption.value;
    const current = questions[currentQuestion];

    if (userAnswer === current.correctAnswer) {
        score++;
    }

    submitButton.style.display = 'none';
    nextButton.style.display = 'block';

    resultElement.textContent = userAnswer === current.correctAnswer
        ? 'Correct!'
        : `Incorrect. The correct answer is ${current.correctAnswer}.`;

    if (currentQuestion === questions.length - 1) {
        scoreElement.style.display = 'block';
        scoreElement.textContent = `Score: ${score} out of ${questions.length}`;
        nextButton.textContent = 'Finish';
    }
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
        submitButton.style.display = 'block';
        nextButton.style.display = 'none';
        resultElement.textContent = '';
    } else {
        scoreElement.style.display = 'block';
        scoreElement.textContent = `Score: ${score} out of ${questions.length}`;
        nextButton.style.display = 'none';
    }
}

loadQuestion();

submitButton.addEventListener('click', checkAnswer);
nextButton.addEventListener('click', nextQuestion);
