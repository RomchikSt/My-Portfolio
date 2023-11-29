import { Box, styled } from "@mui/material";
import Header from "./components/Header";
import Result from "./components/Result";
import LengthOption from "./components/LengthOption";
import ToggleOptions from "./components/ToggleOptions";
import GenerateButton from "./components/GenerateButton";

const AppContainer = styled(Box)({
  padding: "0 6rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  height: "58rem",
  width: "40rem",
  borderRadius: "3rem",
  background: "rgba(0,0,0,0.6)",
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
        <GenerateButton />
      </AppContainer>
    </Box>
  );
}

export default App;
