import QuestionCard from "./question_card";
import { questionAndAnswers, validateAnswer } from "./requester";
import React, { useState, useEffect, ReactDOM , findDOMNode} from "react";
import axios from "axios";

import "./styles/App.css";

//const qAndA = await questionAndAnswers();
const answers = [];
const answerNumber = ["A", "B", "C", "D"];

/*  [
  {
    id: 2,
    question_text: "When was the enigma machine cracked?",
    answers: [
      { answer_id: 3, answer_text: 1941 },
      { answer_id: 2, answer_text: 1942 },
      { answer_id: 4, answer_text: 1939 },
      { answer_id: 1, answer_text: 1943 },
    ],
  },
  {
    id: 4,
    question_text: "What did Jane Goodall study?",
    answers: [
      { answer_id: 5, answer_text: "Fish" },
      { answer_id: 8, answer_text: "Mushrooms" },
      { answer_id: 7, answer_text: "Chimpanzees" },
      { answer_id: 6, answer_text: "Orchids" },
    ],
  },
];
*/


function App() {

  const [tempData, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const asyncResponse = await questionAndAnswers;
      const data = asyncResponse.data;
      setData(data);
    }
    if(tempData !== []) fetchData();
  },[]); 

  let [currentQuestion, setCurrentQuestion] = useState(0);
  let [correctAnswers, setCorrectAnswers] = useState(0);
  let [isQuestionAnswered, setIsQuestionAnswered] = useState(false);

  function checkAnswer(answer) {
    let answerText = answer.target.innerHTML.split(" ")[1];
    let correctAnswerText = getCorrectAnswer(
      tempData[currentQuestion]
    ).answer_text;
    console.log(getCorrectAnswer(tempData[currentQuestion]));
    if (answerText == correctAnswerText) {
      setCorrectAnswers(correctAnswers + 1);
      answer.target.style.backgroundColor = "green"
    } else {
      answer.target.style.backgroundColor = "red"
      let correctAnswer = getCorrectAnswer(tempData[currentQuestion]);
      console.log(correctAnswer)
      document.getElementById(correctAnswer.answer_id).style.backgroundColor = "Green";

    }
    setIsQuestionAnswered(true);
  }



  function getCorrectAnswer(question) {
    console.log(question);
    for (let index = 0; index < question.answers.length; index++) {
      const answer = question.answers[index];
      console.log(answer);
      const isCorrect = validateAnswer(answer);
      if (isCorrect) {
        console.log("Correct answer:", answer);
        return answer;
      }
    }
  }


  function nextQuestion() {
    setCurrentQuestion(currentQuestion + 1);
    setIsQuestionAnswered(false);
  }

  const renderQuestionCard = (currentQuestion) => {
    return (
      <QuestionCard
        key={tempData[currentQuestion].id}
        question={tempData[currentQuestion]}
        correctAnswer={getCorrectAnswer(tempData[currentQuestion])}
        checkAnswer={checkAnswer}
        answers={tempData[currentQuestion].answers}
        answerNumber={answerNumber}
      />
    );
  };


  return (
    <div className="App">
      {currentQuestion < tempData.length
        ? renderQuestionCard(currentQuestion)
        : ""}
      {isQuestionAnswered ? <button onClick={nextQuestion}>Next</button> : ""}
    </div>
  );
}

export default App;
