import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root{
    &, &.light-mode{
    --bg-top: #005BB5;
    --bg-bottom: #FFD500;
    --tx-color: #000;
    --bg-transparent: rgba(255, 255, 255, 0.15); 
    --bg-bottom-go:#fef9c3;
    --empty-progress-line:#f3f3f3;
    --fill-progress-line:#4caf50;
    --fill-correct-answer:#16a34a;
    --fill-wrong-answer:#ef4444;

    
    }

    &.dark-mode{
    --bg-top: #005BB5;
    --bg-bottom: #0f172a;
    --tx-color: #cbd5e1;
    --bg-transparent: rgba(0, 0, 0, 0.15);
    --bg-bottom-go:#1e3a8a;  
    --empty-progress-line: #e0f2fe;
    --fill-progress-line: #3b82f6; 
    --fill-correct-answer:#15803d;
    --fill-wrong-answer:#9f1239;
    }
}

* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    color: #000;
    font-size: 2rem;
}

html{
    font-size: 62.5%;
    
}

body {
    font-family: "Roboto", sans-serif;
    background: linear-gradient(to bottom, var(--bg-top), var(--bg-bottom)); 
    min-height: 100vh;
    min-width: 100vw;
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
