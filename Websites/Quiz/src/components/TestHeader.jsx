import styled from "styled-components";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  margin: 4rem;

  progress {
    background-color: var(--empty-progress-line);
    border: none;
    height: 1rem;
    width: 50rem;
    border-radius: 1rem;
    overflow: hidden;
    margin-bottom: 1rem;
  }

  progress::-webkit-progress-value {
    background-color: var(--fill-progress-line);
    border-radius: 1rem;
  }

  progress::-moz-progress-bar {
    background-color: var(--fill-progress-line);
    border-radius: 1rem;
  }

  progress::-webkit-progress-bar {
    background-color: var(--empty-progress-line);
    border-radius: 1rem;
  }
`;

const StyledTestName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;

  svg {
    width: 5rem;
    height: 5rem;
    fill: var(--tx-color);
  }

  h1 {
    font-size: 5rem;
    font-weight: bold;
    color: var(--tx-color);
  }
`;

const StyledNumbers = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  p {
    color: var(--tx-color);

    strong {
      color: var(--tx-color);
    }
  }
`;

function TestHeader({ test, nextQuestion, score, maxQuestions, maxScore }) {
  const questionsIcon = {
    HTML: <FaHtml5 />,
    CSS: <FaCss3Alt />,
    JavaScript: <SiJavascript />,
    React: <FaReact />,
  };

  return (
    <StyledHeader>
      <StyledTestName>
        {questionsIcon[test]}
        <h1>{test} Test</h1>
      </StyledTestName>
      <progress value={nextQuestion + 1} max={maxQuestions} />
      <StyledNumbers>
        <p>
          Question <strong>{nextQuestion + 1}</strong>/{maxQuestions}
        </p>
        <p>
          Points <strong>{score}</strong>/{maxScore}
        </p>
      </StyledNumbers>
    </StyledHeader>
  );
}

export default TestHeader;
