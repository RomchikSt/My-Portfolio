import styled from "styled-components";
import { motion } from "framer-motion";

type MobileNavSectionProps = {
  isOpenMobileNav: boolean;
  handleChangeMobileNav: (isOpenMobileNav: boolean) => void;
};

const Label = styled(motion.label)`
  position: absolute;
  height: 50px;
  width: 50px;
  top: 20px;
  right: 20px;
  text-align: center;
  background-color: #0aff9d;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 51;
`;

const NavIcon = styled.div<{ isOpen: boolean }>`
  width: 30px;
  height: 25px;
  position: relative;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;

  span {
    display: block;
    position: absolute;
    height: 5px;
    width: 50%;
    background: #111111;
    opacity: 1;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;
  }

  span:nth-child(even) {
    left: 50%;
    border-radius: 0 9px 9px 0;
  }

  span:nth-child(odd) {
    left: 0px;
    border-radius: 9px 0 0 9px;
  }

  span:nth-child(1),
  span:nth-child(2) {
    top: 0px;
  }

  span:nth-child(3),
  span:nth-child(4) {
    top: 9px;
  }

  span:nth-child(5),
  span:nth-child(6) {
    top: 18px;
  }

  ${({ isOpen }) =>
    isOpen &&
    `
    span:nth-child(2),span:nth-child(5) {
      -webkit-transform: rotate(-45deg);
      -moz-transform: rotate(-45deg);
      -o-transform: rotate(-45deg);
      transform: rotate(-45deg);
    }
    span:nth-child(1) {
      left: 5px;
      top: 7px;
      -webkit-transform: rotate(45deg);
      -moz-transform: rotate(45deg);
      -o-transform: rotate(45deg);
      transform: rotate(45deg);
      transform: rotate(45deg);
    }
    span:nth-child(2) {
      left: calc(50% - 3px);
      top: 5px;
    }
    span:nth-child(3) {
      left: 50%;
      opacity: 0;
      
    }
    span:nth-child(4) {
      left: 100%;
      opacity: 0;
      
    }
    span:nth-child(5) {
      left: 5px;
      top: 15px;
    }
    span:nth-child(6) {
      left: calc(50% - 5px);
      -webkit-transform: rotate(45deg);
      -moz-transform: rotate(45deg);
      -o-transform: rotate(45deg);
      transform: rotate(45deg);
      top: 15px;
    }
  `}
`;

const Wrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: #fff;
  clip-path: circle(25px at calc(100% - 45px) 45px);
  transition: all 0.3s ease-in-out;
  z-index: 50;
`;

const MenuItems = styled.ul`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  list-style: none;
  text-align: center;
`;

const MenuItem = styled(motion.li)`
  margin: 15px 0;
`;

const MenuLink = styled.a`
  color: none;
  text-decoration: none;
  font-size: 30px;
  font-weight: 500;
  padding: 5px 30px;
  color: #fff;
  border-radius: 50px;
  background: #000;
  position: relative;
  line-height: 50px;
  transition: all 0.3s ease;
  &:hover {
    color: #fff;
  }
  &:hover:after {
    transform: scaleY(1);
  }
  &:after {
    position: absolute;
    content: "";
    background: #0aff9d;
    width: 104%;
    height: 110%;
    left: -2%;
    top: -5%;
    border-radius: 50px;
    transform: scaleY(0);
    z-index: -1;
    transition: transform 0.3s ease;
  }
`;

const menuVariants = {
  open: { clipPath: "circle(75% at 50% 50%)" },
  closed: { clipPath: "circle(25px at calc(100% - 45px) 45px)" },
};

function MobileNavSection({
  isOpenMobileNav,
  handleChangeMobileNav,
}: MobileNavSectionProps) {
  return (
    <div className="1024px:hidden">
      <input
        type="checkbox"
        id="active"
        style={{ display: "none" }}
        checked={isOpenMobileNav}
        onChange={() => handleChangeMobileNav(!isOpenMobileNav)}
        className="z-50"
      />
      <Label
        htmlFor="active"
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.1, delay: 0.3 }}
      >
        <NavIcon isOpen={isOpenMobileNav}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </NavIcon>
      </Label>
      <Wrapper
        initial="closed"
        animate={isOpenMobileNav ? "open" : "closed"}
        variants={menuVariants}
      >
        <MenuItems>
          <MenuItem whileHover={{ scale: 1.1 }}>
            <MenuLink href="#">Home</MenuLink>
          </MenuItem>
          <MenuItem whileHover={{ scale: 1.1 }}>
            <MenuLink href="#">About</MenuLink>
          </MenuItem>
          <MenuItem whileHover={{ scale: 1.1 }}>
            <MenuLink href="#">Portfolio</MenuLink>
          </MenuItem>
          <MenuItem whileHover={{ scale: 1.1 }}>
            <MenuLink href="#">Contact</MenuLink>
          </MenuItem>
        </MenuItems>
      </Wrapper>
    </div>
  );
}

export default MobileNavSection;
