import styled from "styled-components";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { selectZoom } from "../features/map/mapSelectors";
import { setZoom } from "../features/map/mapSlice";

const ButtonContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  bottom: 3rem;
  right: 2rem;
  z-index: 999;
  width: 4rem;
  height: 8rem;
  border-radius: 4rem;
  overflow: hidden;
  gap: 0.1rem;
  background-color: #111111;
  border: 1px solid #111111;
  box-shadow: 0 0.4rem 1.2rem #111111;
`;

const StyledButton = styled.button`
  height: 3.9rem;
  border: none;
  background-color: #fef2f2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function FilterBottom() {
  const dispatch = useDispatch();
  const zoom = useSelector(selectZoom);

  const handleZoomPlus = () => {
    if (zoom < 18 && zoom >= 1) dispatch(setZoom(zoom + 1));
  };

  const handleZoomMinus = () => {
    if (zoom <= 18 && zoom > 1) dispatch(setZoom(zoom - 1));
  };

  return (
    <ButtonContainer>
      <StyledButton onClick={handleZoomPlus}>
        <FaPlus />
      </StyledButton>
      <StyledButton onClick={handleZoomMinus}>
        <FaMinus />
      </StyledButton>
    </ButtonContainer>
  );
}

export default FilterBottom;
