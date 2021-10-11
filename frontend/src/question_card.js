import Answer from "./answer";
import questionAndAnswers from "./requester";

//const qAndA = questionAndAnswers();
const answers = [];

const tempData = {
  id: 2,
  question_text: "When was the enigma machine cracked?",
  answers: [
    { answer_text: 1941 },
    { answer_text: 1942 },
    { answer_text: 1939 },
    { answer_text: 1943 },
  ],
};

function getAnswers() {
  tempData.answers.forEach((answer) => {
    const answerDiv = Answer(answer.answer_text)
    console.log(answerDiv)
    answers.push(<div>{answerDiv.props.children}</div>);
  });
}

function QuestionCard() {
  getAnswers();
  return(
  <div>
    This will be the question
    <div>{answers}</div>
  </div>
  )};

export default QuestionCard;
