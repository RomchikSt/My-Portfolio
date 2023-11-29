import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    color: #000;
    font-size: 2rem;
    color: #ffffff;
}

html{
    font-size: 62.5%;
    
}

body {
    font-family: "Roboto", sans-serif;
    background: linear-gradient(to bottom, #005BB5, #209cfe); 
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
}

@media (max-width: 768px) {
    html {
        font-size: 50%;
    }
    p {
        font-size: 1.6rem;
    }
}

@media (max-width: 500px) {
    html {
        font-size: 40%;
    }
    p {
        font-size: 1.4rem;
    }
    
}

`;

export default GlobalStyles;
