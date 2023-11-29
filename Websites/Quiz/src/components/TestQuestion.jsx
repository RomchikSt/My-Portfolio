import styled from "styled-components";

const StyledQuestion = styled.div`
  margin: 4rem;
  color: var(--tx-color);

  p {
    font-size: 2.5rem;
    color: var(--tx-color);
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin: 2rem;
    margin-bottom: 4rem;
  }
`;

function TestQuestion({ test, language, nextQuestion, questionsTheme }) {
  return (
    <StyledQuestion>
      <p>{questionsTheme[test][language][nextQuestion].question}</p>
    </StyledQuestion>
  );
}

export default TestQuestion;
