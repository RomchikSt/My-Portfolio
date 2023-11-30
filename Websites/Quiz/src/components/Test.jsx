import { useParams } from "react-router-dom";
import { questionsHTML } from "../data/questionsHTML";
import { questionsCSS } from "../data/questionsCSS";
import { questionsJavaScript } from "../data/questionsJavaScript";
import { questionsReact } from "../data/questionsReact";
import styled from "styled-components";
import Button from "./Button";
import { useEffect, useState } from "react";
import ResultsWindow from "./ResultsWindow";
import TestHeader from "./TestHeader";
import TestQuestion from "./TestQuestion";
import TestVariants from "./TestVariants";

const StyledTestWindow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${(props) => props.$justifyContent || ""};
  width: 70rem;
`;

const FixedButtons = styled.div`
  display: flex;
  margin-top: 3rem;
  justify-content: space-around;
  width: 100%;
`;

function Quiz() {
  const { language, test } = useParams();
  const [nextQuestion, setNextQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showTest, setShowTest] = useState(true);
  const [hasAnswered, setHasAnswered] = useState(false);

  const questionsTheme = {
    HTML: questionsHTML,
    CSS: questionsCSS,
    JavaScript: questionsJavaScript,
    React: questionsReact,
  };

  const maxQuestions = questionsTheme[test][language].length;
  const maxScore = questionsTheme[test][language].reduce(
    (acc, curr) => acc + curr.score,
    0
  );

  useEffect(() => {
    setTimeLeft(maxQuestions * 30);
  }, [maxQuestions]);

  useEffect(() => {
    if (!showTest) {
      return;
    }

    const interval = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      } else {
        clearInterval(interval);
        setShowModal(true);
        setShowTest(false);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timeLeft, showTest]);

  function handleNextQuestion() {
    setNextQuestion(nextQuestion + 1);
    setSelectedAnswer(null);
    setHasAnswered(false);
  }

  function handleAnswerClick(answerId, correct) {
    setHasAnswered(true);
    setSelectedAnswer(answerId);
    if (correct) {
      setScore(score + questionsTheme[test][language][nextQuestion].score);
      setCorrectAnswersCount(correctAnswersCount + 1);
    }
  }

  function handleFinish() {
    setShowModal(true);
    setShowTest(false);
  }

  function handleRestart() {
    setNextQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setCorrectAnswersCount(0);
    setTimeLeft(maxQuestions * 30);
    setShowModal(false);
    setShowTest(true);
    setHasAnswered(false);
  }

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  return (
    <>
      <StyledTestWindow>
        {showTest && (
          <>
            <TestHeader
              test={test}
              nextQuestion={nextQuestion}
              score={score}
              maxQuestions={maxQuestions}
              maxScore={maxScore}
            />
            <TestQuestion
              test={test}
              language={language}
              nextQuestion={nextQuestion}
              questionsTheme={questionsTheme}
            />
            <TestVariants
              test={test}
              language={language}
              nextQuestion={nextQuestion}
              questionsTheme={questionsTheme}
              handleAnswerClick={handleAnswerClick}
              selectedAnswer={selectedAnswer}
              hasAnswered={hasAnswered}
            />
            <FixedButtons>
              <Button disabled={true}>{formattedTime}</Button>
              <Button
                $visibility={selectedAnswer !== null ? "visible" : "hidden"}
                onClick={
                  maxQuestions === nextQuestion + 1
                    ? handleFinish
                    : handleNextQuestion
                }
              >
                {maxQuestions === nextQuestion + 1 ? "Finish" : "Next"}
              </Button>
            </FixedButtons>
          </>
        )}
        {showModal && (
          <ResultsWindow
            maxQuestions={maxQuestions}
            correctAnswersCount={correctAnswersCount}
            maxScore={maxScore}
            score={score}
            handleRestart={handleRestart}
          />
        )}
      </StyledTestWindow>
    </>
  );
}

export default Quiz;
