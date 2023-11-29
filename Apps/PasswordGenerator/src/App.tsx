import { Box, styled } from "@mui/material";
import Header from "./components/Header";
import Result from "./components/Result";
import LengthOption from "./components/LengthOption";
import ToggleOptions from "./components/ToggleOptions";

const AppContainer = styled(Box)({
  height: "70rem",
  width: "40rem",
  borderRadius: "2rem",
  background: "rgba(0,0,0,0.7)",
  boxShadow: "0 0 10px 5px rgba(0,0,0,0.5)",
});

function App() {
  return (
    <Box
      height={"100vh"}
      width={"100vw"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        background: "linear-gradient(to bottom, #005BB5, #209cfe)",
      }}
    >
      <AppContainer>
        <Header />
        <Result />
        <LengthOption />
        <ToggleOptions />
      </AppContainer>
    </Box>
  );
}

export default App;
