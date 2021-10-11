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
  console.log(tempData.answers)
  tempData.answers.forEach((answer) => {
    const answerDiv = Answer(answer.answer_text)
    answers.push(answerDiv);
  });
}

function QuestionCard() {
  getAnswers();
  return(
  <div>
    <p>This will be the question</p>
    <div>{answers}</div>
  </div>
  )};

export default QuestionCard;
