const {useState} = require("react");

function Quiz(){
    const questions = [
        {
            questionText: 'Which league is not included in European top five leagues for the season 2022/2023?',
            answerOptions: [
                { answerText: 'Laliga', isCorrect: false },
                { answerText: 'Serie A', isCorrect: false },
                { answerText: 'Ligue1', isCorrect: true },
                { answerText: 'Bundesliga', isCorrect: false },
            ],
        },
        {
            questionText: 'Which of the following countries never win a FIFA World Cup',
            options: [
                { answerText: 'Netherlands', isCorrect: true },
                { answerText: 'England', isCorrect: false },
                { answerText: 'Uruguay', isCorrect: false },
                { answerText: 'Spain', isCorrect: false },
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
        if(nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    return(
        <div id="football" class="slide">
            <div className='app'>
                {showScore ? (
                    <div className='score-section'>
                        You got {score} corrects out of {questions.length} questions
                    </div>
                ) : (
                    <>
                    <div className='question-section'>
                        <div className='question-count'>
                            <span>Question {currentQuestion + 1}</span>/{questions.length}
                        </div>
                        <div className='question-text'>{questions[currentQuestion].questionText}</div>
                    </div>
                    <div className='answer-question'>
                        {questions[currentQuestion].answerOptions.map((answerOption) => (
                            <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                        ))}
                    </div>
                    </>
                )}
            </div>
        </div>
    );
}

module.exports = Quiz;