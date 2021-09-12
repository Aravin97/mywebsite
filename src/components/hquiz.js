const {useState} = require("react");

function Quiz(){
    const questions = [
        {
            questionText: 'Three people have won the FIFA World Cup as a player and coach. They are Mario Zagallo, Didier Deschamps and...?',
            answerOptions: [
                { answerText: 'Fabio Capello', isCorrect: false},
                { answerText: 'Franz Beckenbauer', isCorrect: true},
                { answerText: 'Dunga', isCorrect: false},
                { answerText: 'Vincent del Bosque', isCorrect: false},
            ],
        },
        {
            questionText: 'Frank Lampard has scored more Premier League goals than Thierry Henry, Robbie Fowler and Michael Owen.',
            answerOptions: [
                { answerText: 'FALSE', isCorrect: false},
                { answerText: 'TRUE', isCorrect: true},
            ],
        },
        {
            questionText: 'Which English player is the all-time leading European Championship goalscorer with a tally of seven goals?',
            answerOptions: [
                { answerText: 'Michael Owen', isCorrect: false},
                { answerText: 'Andy Cole', isCorrect: false},
                { answerText: 'Alan Shearer', isCorrect: true},
                { answerText: 'Gary Lineker', isCorrect: false},
            ],
        },
        {
            questionText: 'Which of the following player did not win UEFA Champions League a record three time as manager?',
            answerOptions: [
                { answerText: 'Bob Paisley', isCorrect: false},
                { answerText: 'Carlo Ancelotti', isCorrect: false},
                { answerText: 'Zinedine Zidane', isCorrect: false},
                { answerText: 'Jose Mourinho', isCorrect: true},
            ],
        },
        {
            questionText: 'Which country has won the most FIFA World Cup?',
            answerOptions: [
                { answerText: 'Germany', isCorrect: false},
                { answerText: 'Argentina', isCorrect: false},
                { answerText: 'Brazil', isCorrect: true},
                { answerText: 'France', isCorrect: false},
            ],
        },
        {
            questionText: 'The only player to win UEFA Champions League with three different clubs is',
            answerOptions: [
                { answerText: 'Arjen Robben', isCorrect: false},
                { answerText: 'Clarence Seedorf', isCorrect: true},
                { answerText: 'Daniel Sturridge', isCorrect: false},
                { answerText: 'Frank Rijkaard', isCorrect: false},
            ],
        },
        {
            questionText: 'Liverpool legend Kenny Dalglish is known as "King Kenny" because he is related to the British Royal Family',
            answerOptions: [
                { answerText: 'TRUE', isCorrect: false},
                { answerText: 'FALSE', isCorrect: true},
            ],
        },
        {
            questionText: 'In 2014 World Cup edition, Miroslav Klose became as the all-time top scorer of FIFA World Cup with',
            answerOptions: [
                { answerText: '18 goals', isCorrect: false},
                { answerText: '17 goals', isCorrect: false},
                { answerText: '16 goals', isCorrect: true},
                { answerText: '15 goals', isCorrect: false},
            ],
        },
        {
            questionText: 'Which football league is not included in European Top Five League for the season 2021/2022?',
            answerOptions: [
                { answerText: 'Ligue 1', isCorrect: true},
                { answerText: 'La liga', isCorrect: false},
                { answerText: 'Bundesliga', isCorrect: false},
                { answerText: 'Serie A', isCorrect: false},
            ],
        },
        {
            questionText: 'Which club is associated with Galacticos?',
            answerOptions: [
                { answerText: 'AC Milan', isCorrect: false},
                { answerText: 'FC Barcelona', isCorrect: false},
                { answerText: 'Bayern Munich', isCorrect: false},
                { answerText: 'Real Madird', isCorrect: true},
            ],
        },
        {
            questionText: 'In Spanish football, what is "the Pichichi"?',
            answerOptions: [
                { answerText: 'top goalscorer award', isCorrect: true},
                { answerText: 'best goal award', isCorrect: false},
                { answerText: 'fair play award', isCorrect: false},
                { answerText: 'player of the season award', isCorrect: false},
            ],
        },
        {
            questionText: 'The phrase "park the bus" arose when Jose Mourinho was forced to park the Chelsea team bus after the bus driver fell ill.',
            answerOptions: [
                { answerText: 'FALSE', isCorrect: true},
                { answerText: 'TRUE', isCorrect: false},
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
            <div id="football" class="slide">
                <div class="soccer">
                <h61>Football Fans</h61>
                <br></br>
                <p61>Come and test your football knowledge here!</p61>
        <div id="soccer" class="quiz">
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
        </div>
        </div>
    );
}

module.exports = Quiz;