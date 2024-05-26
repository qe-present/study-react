import {useCallback, useRef, useState} from 'react';
import QUESTIONS from '../questions.js';
import Summary from "./Summary.jsx";
import Question from "./Question.jsx";
export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([])
    const activeQuestionIndex =userAnswers.length
    const quizIsOver = activeQuestionIndex === QUESTIONS.length
    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
        setUserAnswers(prevState => [...prevState, selectedAnswer])
    }, [])
    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer])
    if (quizIsOver) {
        return (
            <Summary userAnswers={userAnswers}/>
        )
    }

    return (
        <div id="quiz">
            <Question
                key={activeQuestionIndex}
                index={activeQuestionIndex}
                onSelect={handleSelectAnswer}
                onSkipAnswer={handleSkipAnswer}

            />

        </div>
    )
}
