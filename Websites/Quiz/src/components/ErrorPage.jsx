import styled from "styled-components";
import { BiError } from "react-icons/bi";

const StyledErrorPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
  margin: 2rem;

  svg {
    fill: var(--tx-color);
    width: 20rem;
    height: 20rem;
  }

  p {
    color: var(--tx-color);
    font-size: 7rem;
    text-align: center;
  }
`;

function ErrorPage({ message }) {
  return (
    <StyledErrorPage>
      <BiError />
      <p>{message}</p>
    </StyledErrorPage>
  );
}

export default ErrorPage;
