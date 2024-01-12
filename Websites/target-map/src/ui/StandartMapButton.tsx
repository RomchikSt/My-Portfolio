import styled from "styled-components";
import { motion } from "framer-motion";
import { mapButtonVarints } from "../animations/variants";

const StyledButton = styled(motion.button)`
  position: absolute;
  z-index: 1000;
  width: 4rem;
  height: 4rem;
  border-radius: 100%;
  background-color: #fef2f2;
  color: #111111;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  border: 1px solid #111111;
  box-shadow: 0 0.4rem 1.2rem #111111;
  transition: all 0.3s ease-in-out;

  &:hover {
    scale: 1.1;
    border: 1px solid #fef2f2;
  }

  &:active {
    scale: 0.9;
    background-color: #fef2f2;
    color: #111111;
    border: 1px solid #111111;
  }
`;

type StandartMapButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
};

function StandartMapButton({
  children,
  top,
  left,
  right,
  bottom,
  onClick,
}: StandartMapButtonProps) {
  return (
    <StyledButton
      variants={mapButtonVarints}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={onClick}
      style={{ top, left, right, bottom }}
    >
      {children}
    </StyledButton>
  );
}

export default StandartMapButton;
