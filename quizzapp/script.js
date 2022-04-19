const quizData = [
    {
        question: "What is the capital of the United States?",
        a: 'London',
        b: 'Washington',
        c: 'Los Angeles',
        d: 'New York',
        correct: 'b'
    }, {
        question: 'What is the name of programming language?',
        a: 'cow',
        b: 'chair',
        c: 'PS',
        d: 'Ruby',
        correct: 'd'
    }, {
        question: 'Where is the hometown of uncle Ho?',
        a: 'Nghe An',
        b: 'Thanh Hoa',
        c: 'Ha Noi',
        d: 'TP. Ho Chi Minh',
        correct: 'a'
    }, {
        question: 'What is the chemical formula of sugar?',
        a: 'C6H12O6',
        b: 'C12H22O11',
        c: 'C2H4',
        d: 'C6H6Cl6',
        correct: 'a'
    }
]
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;
loadQuiz();

function loadQuiz(){
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});


function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}
function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

