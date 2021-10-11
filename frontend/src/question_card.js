import Answer from "./answer";
import questionAndAnswers from "./requester";

const qAndA = questionAndAnswers();

function renderAnswers() {
  qAndA.answers.forEach((answer) => {
    return Answer(answer);
  });
}

function QuestionCard() {
  <div>
    This will be the question
    <div>{renderAnswers()}</div>
  </div>;
}


export default QuestionCard;