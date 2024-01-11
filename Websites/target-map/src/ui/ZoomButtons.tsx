import styled from "styled-components";
import { FaPlus, FaMinus } from "react-icons/fa";

const ButtonContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  bottom: 3rem;
  right: 2rem;
  z-index: 1000;
  width: 4rem;
  height: 8rem;
  border-radius: 4rem;
  overflow: hidden;
  gap: 0.1rem;
  background-color: #111111;
  border: 1px solid #111111;
`;

const StyledButton = styled.button`
  height: 3.9rem;
  border: none;
  background-color: #fef2f2;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function FilterBottom() {
  return (
    <ButtonContainer>
      <StyledButton>
        <FaPlus />
      </StyledButton>
      <StyledButton>
        <FaMinus />
      </StyledButton>
    </ButtonContainer>
  );
}

export default FilterBottom;
