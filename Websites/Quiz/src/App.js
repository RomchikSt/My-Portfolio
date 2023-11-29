import GlobalStyles from "./styles/GlobalStyles";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import ChooseTests from "./pages/ChooseTests";
import Quiz from "./pages/Quiz";
import Error from "./pages/Error";
import ColorChenger from "./components/ColorChenger";
import { DarkModeProvider } from "./context/DarkModeContext";

function App() {
  return (
    <DarkModeProvider>
      <GlobalStyles />
      <BrowserRouter>
        <ColorChenger />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:language" element={<ChooseTests />} />
          <Route path="/:language/:test" element={<Quiz />} />
          <Route path="/error" element={<Error />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </DarkModeProvider>
  );
}

export default App;
