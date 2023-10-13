import "./IsThereAnyProblems.css";
import questionMark from "../assets/images/7720439-ai.svg";
function IsThereAnyProblems(props) {
  return (
    <div className="IsThereAnyProblems">
      <img src={questionMark} alt="question mark" />
      <div className="btn-and-question">
        <h3>{props.question}</h3>
        <button>{props.buttonText}</button>
      </div>
    </div>
  );
}
export default IsThereAnyProblems;
