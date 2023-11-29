import styled, { keyframes } from "styled-components";
import { BsShieldExclamation } from "react-icons/bs";
import { rules } from "../data/rules";
import Button from "./Button";
import { Link } from "react-router-dom";

const slideUp = keyframes`
  from {
    transform: scale(0.8);
  }
  to {
    transform: scale(1);
  }
`;

const StyledRuleWindow = styled.div`
  background-color: var(--bg-transparent);
  width: 60rem;
  height: 60rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 4rem;
  animation: ${slideUp} 0.3s ease-out forwards;

  @media (max-width: 500px) {
    width: 50rem;
    height: 50rem;
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

  svg {
    width: 4rem;
    height: 4rem;
    fill: var(--tx-color);
  }
`;

const ButtonsGroup = styled.div`
  display: flex;
  justify-content: space-around;
  width: 40rem;
  margin-bottom: 5rem;
`;

function RuleWindow({ onClick, language, questionCount, selectedTest }) {
  const ruleMessage = rules.find((rule) => rule[language]);

  return (
    <StyledRuleWindow>
      <StyledText>
        <StyledTitle>
          <BsShieldExclamation />
          <h2>{ruleMessage && ruleMessage[language][0].head}</h2>
        </StyledTitle>
        <p>
          {ruleMessage &&
            ruleMessage[language][0].description
              .replaceAll("!!!count!!!", questionCount)
              .replaceAll("!!!count2!!!", questionCount / 2)}
        </p>
      </StyledText>
      <ButtonsGroup>
        <Button onClick={onClick} $width={"15rem"} $height={"5rem"}>
          {ruleMessage && ruleMessage[language][0].buttonCancel}
        </Button>
        <StyledLink to={`/${language}/${selectedTest}`}>
          <Button
            $width={"15rem"}
            $height={"5rem"}
            $backgroundColor={"var(--bg-bottom-go)"}
          >
            {ruleMessage && ruleMessage[language][0].buttonGo}
          </Button>
        </StyledLink>
      </ButtonsGroup>
    </StyledRuleWindow>
  );
}

export default RuleWindow;
