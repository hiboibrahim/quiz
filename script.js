document.addEventListener("DOMContentLoaded",function() {
    const display = document.getElementById('display');

});



const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const myQuestions = [
    {
        question: "What is the capital of New Zealand?",
        answers:{
            a: "Madrid",
            b: "Wellington",
            c: "Cardiff",
            d: "Berlin"
        },
        correctAnswer:"c"
    },
    {
        question: "What was the most popular girls name in the UK in 2021?",
        answers:{
            a: "Jane",
            b: "Maria",
            c: "Millicent",
            d: "Olivia"
    },
    correctAnswer:"d"
}
];


function showQuestions() {
    let output = [];
    let answers;
    for (let i=0; i<myQuestions.length; i++){
        answers = [];
        
    }
}


function buildQuiz () {


}

function showResults(){

}
submitButton.addEventListener('click', showResults);