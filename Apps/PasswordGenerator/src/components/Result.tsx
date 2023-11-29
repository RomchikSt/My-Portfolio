import { Box, Typography, styled } from "@mui/material";

const Line = styled(Box)({
  width: "100%",
  height: "5px",
  borderRadius: "2rem",
  margin: "1rem 0",
});

function Result() {
  return (
    <Box width={"100%"}>
      <Typography
        variant="h5"
        color={"#fff"}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid #fff",
          borderRadius: "1rem",
          height: "5rem",
        }}
      >
        Press button Generated Password
      </Typography>
      <Line bgcolor={"green"}></Line>
    </Box>
  );
}

export default Result;
