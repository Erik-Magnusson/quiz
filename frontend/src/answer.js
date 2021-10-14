import "./styles/answer.css";

export default function Answer(answer, index, answerAlternative, checkAnswer,correctAnswer) {
  
  var answerDiv = (
    <button
    key = {index}
      id={answer.answer_id}
      class={`answer-button answer-button-${index}`}
      onClick={checkAnswer}
      
    >
      {answerAlternative}: {answer.answer_text}
    </button>
  );
  return answerDiv;
}
