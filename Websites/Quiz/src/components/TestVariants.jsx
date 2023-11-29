import styled from "styled-components";
import Button from "./Button";

const StyledVariants = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 4rem;
`;

function TestVariants({
  test,
  language,
  nextQuestion,
  questionsTheme,
  handleAnswerClick,
  selectedAnswer,
  hasAnswered,
}) {
  return (
    <StyledVariants>
      {questionsTheme[test][language][nextQuestion].answers.map((item) => (
        <Button
          key={item.id}
          $width={"50rem"}
          $height={"5rem"}
          onClick={() => handleAnswerClick(item.id, item.correct)}
          $backgroundColor={
            selectedAnswer === item.id
              ? item.correct
                ? "var(--fill-correct-answer)"
                : "var(--fill-wrong-answer)"
              : item.correct && selectedAnswer !== null
              ? "var(--fill-correct-answer)"
              : "initial"
          }
          disabled={hasAnswered}
        >
          {item.answer}
        </Button>
      ))}
    </StyledVariants>
  );
}

export default TestVariants;
