// DOM Elements
    const quizContainer = document.getElementById('quiz-container');
    const nextButton = document.getElementById('next-button');


// state variables

let currentQuestionIndex = 0;
let questions = [ {
    question: "What is the capital of New Zealand?",
    options: ['Madrid', 'Wellington', 'Cardiff', 'Berlin'],

    correctAnswer: "Wellington"
},

{
    question: "What is the most popular girl's name in 2023?",
    options: ['Jane', 'Mary', 'Olivia', 'North'],

    correctAnswer: "Olivia"
}, ]

// Event listener on click that will need to be there for every question

nextButton.addEventListener('click', loadNextQuestion);

// Initialize the Quiz
initializeQuiz();

// Initialize the Quiz by asking the first question

function initializeQuiz() {
    displayQuestion(
        questions[currentQuestionIndex
        ]
    )
}

function displayQuestion(questionObj) {

    // empty current question 
    quizContainer.innerHTML = '';

    // create a h2 
    const questionElement = document.createElement('h2');
    // load the h2 with question text 
    questionElement.innerText = questionObj.question;

    //display question on the screen

    quizContainer.appendChild(questionElement);
    // display alll the options as buttons using the createOptionButton function:
    questionObj.options.forEach(option => {
        const button = createOptionButton(option)
        quizContainer.appendChild(button);
    });
}
        
// set the text of the button to be equal to option:
function createOptionButton(option) {
    const button = document.createElement('button');
    button.innerText = option;
    button.classList.add('btn', 'btn-outline-primary', 'mt-2');
    button.addEventListener('click' ,() => handleOptionClick(option));
    return button
}


// proceed to load next question

function loadNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion(questions[currentQuestionIndex])
    } else {
        endQuiz();
    }

}

function endQuiz() {
    quizContainer.innerHTML = '<h2> You lost!</h2>';
    nextButton.classList.add('d-none');
}

function handleOptionClick(optionSelected) {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    if (optionSelected === correctAnswer) {
        // alert
        alert('Correct Answer');
    } else {
        alert('Incorrect Answer')
    }

}
