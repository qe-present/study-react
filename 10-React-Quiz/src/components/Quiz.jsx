import {useState} from 'react';
import QUESTIONS from '../questions.js';
import QuestionTimer from './QuestionTimer.jsx'
import  quizComplete from  '../assets/quiz-complete.png'
export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([])
    const activeQuestionIndex = userAnswers.length

    const quizIsOver = activeQuestionIndex === QUESTIONS.length
    function handleSelectAnswer(answer) {
        setUserAnswers(prevState => [...prevState, answer])
    }
    if (quizIsOver) {
        return (
            <div id="summary">
                <img src={quizComplete} alt="quiz complete" />
                <h2>Quiz complete!</h2>
            </div>
        )
    }
    const shuffledAnswers=[...QUESTIONS[activeQuestionIndex].answers]
    shuffledAnswers.sort((
        () => Math.random() - 0.5
    ))
    return (
        <div id="quiz">
            <div id="question">
                <QuestionTimer timeout={10000} OnTimeout={() => handleSelectAnswer(null)} />
                <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
                <ul id='answers'>
                    {shuffledAnswers.map((answer, index) => (
                        <li key={index} className='answer'>
                            <button onClick={() => handleSelectAnswer(answer)}>
                                {answer}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
