
import axios from "axios";

export const questionAndAnswers = axios
    .get("http://localhost:8080/api/v1/questions");


export const validateAnswer = async (answer_id) => {
  axios.get(`http://localhost:8080/api/v1/answers/validate/${answer_id}`).then((response) => {
    return response;
  }).catch((error) => {
    return error;
  });
};


