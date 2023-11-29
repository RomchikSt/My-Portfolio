import GlobalStyles from "./styles/GlobalStyles";
import styled from "styled-components";

import { useState } from "react";

import Header from "./components/Header";
import Password from "./components/Password";
import LengthOption from "./components/LengthOption";
import Settings from "./components/Settings";
import Button from "./components/Button";

const Window = styled.div`
  height: 80rem;
  width: 50rem;
  background: #0a0e31;
  border-radius: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font-size: 2rem;
    color: #ffffff;
    margin-top: 2rem;
  }
`;

function App() {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(16);
  const [isLowercase, setIsLowercase] = useState(false);
  const [isUppercase, setIsUppercase] = useState(false);
  const [isNumbers, setIsNumbers] = useState(true);
  const [isSymbols, setIsSymbols] = useState(false);
  const [isSpaces, setIsSpaces] = useState(false);

  function handlePasswordLengthChange(e) {
    setPasswordLength(e.target.value);
  }

  function handleLowercaseChange(e) {
    setIsLowercase(e.target.checked);
  }

  function handleUppercaseChange(e) {
    setIsUppercase(e.target.checked);
  }

  function handleNumbersChange(e) {
    setIsNumbers(e.target.checked);
  }

  function handleSymbolsChange(e) {
    setIsSymbols(e.target.checked);
  }

  function handleSpacesChange(e) {
    setIsSpaces(e.target.checked);
  }

  function passwordCreate() {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";
    const spaceChar = " ";

    let availableChars = "";

    if (isLowercase) availableChars += lowercaseChars;
    if (isUppercase) availableChars += uppercaseChars;
    if (isNumbers) availableChars += numberChars;
    if (isSymbols) availableChars += symbolChars;
    if (isSpaces) availableChars += spaceChar;

    let password = "";
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * availableChars.length);
      password += availableChars[randomIndex];
    }

    return setPassword(password);
  }

  return (
    <>
      <GlobalStyles />
      <Window>
        <Header />
        <Password value={password} />
        <h3>Settings:</h3>
        <LengthOption
          value={passwordLength}
          setPasswordLength={handlePasswordLengthChange}
        />
        <Settings checked={isLowercase} onChange={handleLowercaseChange}>
          Includes Lowercase
        </Settings>
        <Settings checked={isUppercase} onChange={handleUppercaseChange}>
          Includes Uppercase
        </Settings>
        <Settings checked={isNumbers} onChange={handleNumbersChange}>
          Includes Numbers
        </Settings>
        <Settings checked={isSymbols} onChange={handleSymbolsChange}>
          Includes Symbols
        </Settings>
        <Settings checked={isSpaces} onChange={handleSpacesChange}>
          Includes Spaces
        </Settings>
        <Button onClick={passwordCreate} />
      </Window>
    </>
  );
}

export default App;
