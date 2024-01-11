import styled from "styled-components";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { setFilter } from "../features/map/mapSlice";
import { useDispatch } from "react-redux";

const StyledButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  border: none;
`;

function CloseButton() {
  const dispatch = useDispatch();

  const handleFilterClose = () => {
    dispatch(setFilter(false));
  };

  return (
    <StyledButton onClick={handleFilterClose}>
      <IoMdCloseCircleOutline size="3.5rem" />
    </StyledButton>
  );
}

export default CloseButton;
