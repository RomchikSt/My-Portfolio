import styled from "styled-components";
import { welcome } from "../data/welcome";
import { testTheme } from "../data/testTheme";
import RuleWindow from "./RuleWindow";

import { useParams } from "react-router-dom";
import { useState } from "react";
import Button from "./Button";

import { questionsHTML } from "../data/questionsHTML";
import { questionsCSS } from "../data/questionsCSS";
import { questionsJavaScript } from "../data/questionsJavaScript";
import { questionsReact } from "../data/questionsReact";

const StyledTests = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  justify-content: center;
  width: 50rem;

  h1 {
    font-size: 3rem;
    font-weight: 500;
    margin-bottom: 6rem;
    text-align: center;
    color: var(--tx-color);
  }
`;

function Tests() {
  const { language } = useParams();
  const [selectedTest, setSelectedTest] = useState(null);
  const [tests, setTests] = useState(true);
  const [rules, setRules] = useState(false);

  const questionsTheme = {
    HTML: questionsHTML,
    CSS: questionsCSS,
    JavaScript: questionsJavaScript,
    React: questionsReact,
  };

  const questionCount =
    selectedTest && questionsTheme[selectedTest]
      ? questionsTheme[selectedTest][language].length
      : 0;

  function handleView(testName) {
    setSelectedTest(testName ? testName : selectedTest);
    setTests(!tests);
    setRules(!rules);
  }

  const welcomeMessage = language
    ? welcome.find((message) => message[language])
    : null;

  return (
    <StyledTests>
      {rules && (
        <RuleWindow
          onClick={handleView}
          language={language}
          questionCount={questionCount}
          selectedTest={selectedTest}
        />
      )}
      {tests && (
        <>
          <h1>{welcomeMessage && welcomeMessage[language]}</h1>
          {testTheme.map((test) => (
            <Button
              key={test.name}
              onClick={() => handleView(test.name)}
              $width={"40rem"}
              $height={"5rem"}
              $gap={"1rem"}
            >
              {test.icon}
              {test.name}
            </Button>
          ))}
        </>
      )}
    </StyledTests>
  );
}

export default Tests;
