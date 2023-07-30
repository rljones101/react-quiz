import { useQuiz } from "../context/QuizContext";
import Options from "./Options";

function Question() {
  const { currQuestion } = useQuiz();
  return (
    <div>
      <h4>{currQuestion.question}</h4>
      <Options />
    </div>
  );
}

export default Question;
