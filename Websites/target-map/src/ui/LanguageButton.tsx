import styled from "styled-components";

const StyledButton = styled.button`
  position: absolute;
  top: 3rem;
  right: 3rem;
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
  box-shadow: 0 0.4rem 1.2rem #111111;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 100%;
  padding: 0.4rem;
`;

function FilterBottom() {
  return (
    <StyledButton>
      <StyledImage src="ukFlag.webp" alt="uk_Flag" />
    </StyledButton>
  );
}

export default FilterBottom;
