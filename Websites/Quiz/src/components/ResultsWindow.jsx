import styled from "styled-components";
import { results } from "../data/results";
import Button from "./Button";
import { Link, useParams } from "react-router-dom";

const StyledResultsWindow = styled.div`
  background-color: var(--bg-transparent);
  width: 60rem;
  height: 70rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 4rem;
  margin: 5rem;

  @media (max-width: 585px) {
    width: 50rem;
    height: 80rem;
  }
`;

const StyledText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 5rem;
  margin: 5rem;

  p {
    line-height: 1.4;
    text-align: center;
    color: var(--tx-color);

    @media (max-width: 500px) {
      font-size: 1.5rem;
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  h2 {
    font-size: 3rem;
    color: var(--tx-color);
  }
`;

const ButtonsGroup = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
  width: 40rem;
  margin-bottom: 5rem;
`;

function ResultsWindow({
  maxQuestions,
  correctAnswersCount,
  maxScore,
  score,
  handleRestart,
}) {
  const { language, test } = useParams();
  console.log(results[0][language]);

  return (
    <StyledResultsWindow>
      <StyledText>
        <StyledTitle>
          <h2>{results[0][language][0]}</h2>
        </StyledTitle>
        <p>
          {results[0][language][1]}:{maxQuestions}
        </p>
        <p>
          {results[0][language][2]}:{correctAnswersCount}
        </p>
        <p>
          {results[0][language][3]}:{maxQuestions - correctAnswersCount}
        </p>
        <p>
          {results[0][language][4]}:{maxScore}
        </p>
        <p>
          {results[0][language][5]}:{score}
        </p>
      </StyledText>
      <ButtonsGroup>
        <Button $width={"35rem"} $height={"5rem"} onClick={handleRestart}>
          {results[0][language][6]}
        </Button>

        <StyledLink to={`/${language}`}>
          <Button $width={"35rem"} $height={"5rem"}>
            {results[0][language][7]}
          </Button>
        </StyledLink>
      </ButtonsGroup>
    </StyledResultsWindow>
  );
}

export default ResultsWindow;
