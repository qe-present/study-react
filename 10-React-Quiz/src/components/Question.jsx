import QuestionTimer from "./QuestionTimer.jsx";
import Answers from "./Answers.jsx";

export default function Question({
                                     questionText,
                                     answers,
                                     onSelect,
                                     answerState,
                                     selectedAnswer,
                                     onSkipAnswer
                                 }) {
    return (
        <div id="question">
            <QuestionTimer timeout={10000} OnTimeout={onSkipAnswer} />
            <h2>{questionText}</h2>
            <Answers
                answers={answers}
                answerState={answerState}
                selectedAnswer={selectedAnswer}
                onSelect={onSelect}
            >

            </Answers>
        </div>
    )
}
