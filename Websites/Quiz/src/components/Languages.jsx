import styled from "styled-components";
import { languages } from "../data/languages";
import { Link } from "react-router-dom";
import Button from "./Button";

const StyledLanguages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

function Languages() {
  return (
    <>
      <StyledLanguages>
        {languages.map((language) => (
          <StyledLink to={`/${language}`} key={language}>
            <Button key={language} $width={"40rem"} $height={"5rem"}>
              {language}
            </Button>
          </StyledLink>
        ))}
      </StyledLanguages>
    </>
  );
}

export default Languages;
