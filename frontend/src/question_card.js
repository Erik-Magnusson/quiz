import Answer from "./answer";
import "./styles/question_card.css";

//console.log(qAndA);

export default function QuestionCard(question) {
  return (
    <div class="question-card" id="questionCard">
      <div>{question.question.question_text}</div>
      <div class="answers-container">{question.answers.map((answer, i) => {
        return Answer(answer, i,question.answerNumber[i], question.checkAnswer, question.correctAnswer)
      })}</div>
    </div>
  );
}
