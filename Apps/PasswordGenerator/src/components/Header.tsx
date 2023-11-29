import { Box, Typography, styled } from "@mui/material";

const StyledImg = styled("img")({
  height: "3rem",
  width: "3rem",
  marginRight: "1rem",
});

function Header() {
  return (
    <Box display={"flex"} alignItems={"center"} margin={"4rem auto"}>
      <StyledImg src="logo.svg" alt="lock logo" />
      <Typography variant="h4" color={"#fff"}>
        Password Generator
      </Typography>
    </Box>
  );
}

export default Header;
