const xmr = new XMLHttpRequest();

const questionAndAnswers = () => {
  xmr.addEventListener("load", () => {
    return xmr.responseText;
  });
  xmr.open("GET", "http://localhost:8080/api/v1/questions");
  xmr.send();
};

export default questionAndAnswers;
