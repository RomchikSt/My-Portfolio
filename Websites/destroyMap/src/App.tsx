import GlobalStyles from "./styles/GlobalStyles";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home/index";
import About from "./pages/about/index";
import Contact from "./pages/contact/index";
import Error from "./pages/error";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
