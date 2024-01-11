import { FaFilter } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setFilter } from "../features/map/mapSlice";

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
  box-shadow: 0 0.4rem 1.2rem #111111;
`;

function FilterBottom() {
  const dispatch = useDispatch();

  const handleFilterOpen = () => {
    dispatch(setFilter(true));
  };

  return (
    <StyledButton onClick={handleFilterOpen}>
      <FaFilter size={"2.2rem"} />
    </StyledButton>
  );
}

export default FilterBottom;
