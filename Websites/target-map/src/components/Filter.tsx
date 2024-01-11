import styled from "styled-components";
import CloseButton from "../ui/CloseButton";
import TargetsList from "../ui/TargetsList";
import InputField from "../ui/InputField";
import FilterButtons from "../ui/FilterButtons";

const FilterContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 25vw;
  height: 100vh;
  background: linear-gradient(to bottom, #7f1d1d, #111111);
`;

const StyledFilter = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  color: #fef2f2;
`;

function Filter() {
  return (
    <FilterContainer>
      <StyledFilter>
        <CloseButton />
        <InputField />
        <FilterButtons />
        <TargetsList />
      </StyledFilter>
    </FilterContainer>
  );
}

export default Filter;
