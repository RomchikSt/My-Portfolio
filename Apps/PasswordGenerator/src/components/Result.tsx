import { Box, TextField, styled } from "@mui/material";

const Line = styled(Box)({
  width: "100%",
  height: "5px",
  border: "none",
  background: "green",
  margin: "1rem 0",
});

function Result() {
  return (
    <Box>
      <TextField label="Password" />
      <Line></Line>
    </Box>
  );
}

export default Result;
