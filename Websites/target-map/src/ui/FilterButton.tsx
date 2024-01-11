import { FaFilter } from "react-icons/fa";
import styled from "styled-components";

const StyledButton = styled.button`
  position: absolute;
  top: 3rem;
  left: 3rem;
  z-index: 1000;
  width: 5rem;
  height: 5rem;
  border-radius: 100%;
  background-color: #fef2f2;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  border: 1px solid #111111;
`;

function FilterBottom() {
  return (
    <StyledButton>
      <FaFilter size={"2.2rem"} />
    </StyledButton>
  );
}

export default FilterBottom;
