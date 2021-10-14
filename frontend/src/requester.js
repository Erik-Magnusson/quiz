/*
import axios from "axios";

export const questionAndAnswers = async () => {
  axios
    .get("http://localhost:8080/api/v1/questions")
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

export const validateAnswer = async () => {
  axios.get("http://localhost:8080/api/v1/answers/validate/${answer_id}").then((response)) => {
    return response;
}).catch((error) => {
  return error;
});
*/
export const validateAnswer = (answer) => {
  if (answer.answer_text === 1941 || answer.answer_text === "Chimpanzees") {
    return true;
  } else {
    return false;
  }
};
