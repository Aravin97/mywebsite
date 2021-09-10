const {useState} = require("react");

function Quiz(){
    const questions = [
        {
            questionText: 'Who is the GOAT?',
            answerOptions: [
                { answerText: 'Messi', isCorrect: false},
                { answerText: 'Ronaldinho', isCorrect: false},
                { answerText: 'Neymar', isCorrect: false},
                { answerText: 'Cristiano Ronaldo', isCorrect: true},
            ],
        },
        {
            questionText: 'How many FIFA World Cup Netherland won?',
            answerOptions: [
                { answerText: 'Zero', isCorrect: true},
                { answerText: 'One', isCorrect: false},
                { answerText: 'Two', isCorrect: false},
                { answerText: 'Three', isCorrect: false},
            ],
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerOptionClick = (isCorrect) => {
        if(isCorrect) {
            setScore(score + 1);
        }
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };
    return(
        <div id="football" class="app">
            {showScore ? (
                <div id="trivia" class="score-section">
                    You scored {score} out of {questions.length} questions
                </div>
            ) : (
                <>
                <div class="question-section">
                    <div class="question-count">
                        <span>Question {currentQuestion + 1}</span>
                    </div>
                    <div class="question-text">{questions[currentQuestion].questionText}</div>
                    </div>
                    <div class="answer-section">
                        {questions[currentQuestion].answerOptions.map((answerOption) => (
                            <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                        ))}
                        </div>
                        </>
            )}
        </div>
    );
}

module.exports = Quiz;