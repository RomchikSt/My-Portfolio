import styled from "styled-components";
import { FaPlus, FaMinus } from "react-icons/fa";
import { motion } from "framer-motion";
import { mapButtonVarints } from "../animations/variants";

const ButtonContainer = styled(motion.div)`
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
  transition: all 0.3s ease-in-out;
`;

const StyledButton = styled.button`
  height: 3.9rem;
  border: none;
  background-color: #fef2f2;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #fef2f2;
    background-color: #111111;
  }

  &:active {
    font-size: 1.4rem;
    color: #111111;
    background-color: #fef2f2;
  }
`;

type StandartMapButtonProps = {
  zoomPlus: () => void;
  zoomMinus: () => void;
};

function ZoomButton({ zoomPlus, zoomMinus }: StandartMapButtonProps) {
  return (
    <ButtonContainer
      variants={mapButtonVarints}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ type: "easeInOut", duration: 1 }}
    >
      <StyledButton onClick={zoomPlus}>
        <FaPlus />
      </StyledButton>
      <StyledButton onClick={zoomMinus}>
        <FaMinus />
      </StyledButton>
    </ButtonContainer>
  );
}

export default ZoomButton;
