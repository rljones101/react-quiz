import { useEffect } from "react";
import { useQuiz } from "../context/QuizContext";
function Timer() {
  const { secondsRemaining, dispatch } = useQuiz();
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  useEffect(() => {
    const timerId = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);
    return () => clearInterval(timerId);
  }, [dispatch]);
  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{seconds} {seconds < 10 && "0"}
    </div>
  );
}

export default Timer;
