import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root{
    --bg-color-main:#122e40;
    --bg-color-header:#091930;
    --tx-color1: #f0fdf4;
    --tx-color2:#64ffda;
    --border-color: #64ffda;
    --tx-color3:#4ade80;
    --bg-liner-gradiend: linear-gradient(to bottom right, #4ade80, #65a30d);
}

*,
*::before,
*::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

html{
    font-size: 62.5%;
    background-color: var(--bg-color-header);
    color: var(--tx-color1);
}

body {
    font-family: "Roboto", sans-serif;
    
}

 h3, h4, h5 {
    background: var(--bg-liner-gradiend);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button,a {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

`;

export default GlobalStyles;

/* import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {

  &, &.light-mode{
  --bg-color:#292524;
  }
  
  &.dark-mode{
    --bg-color:#000; 
  }

  --bg-liner-gradiend: linear-gradient(to bottom right, #dc2626, #facc15);
  --bg-light-yellow: #fff7ed;
  --tx-color:#fff7ed;
  --link-color: #f59e0b;
  --tx-color-black: #0c0a09;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  transition: color 0.3s, fill 0.3s, border-color 0.3s;  
  color: var(--tx-color);
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Roboto", sans-serif;
  background-color: var(--bg-color);
  color: var(--tx-color-main);
  line-height: 1.5;
  font-size: 1.6rem;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
}

input:focus,
button:focus,
textarea:focus,
select:focus,
a:focus{ 
  outline: 2px solid var(--link-color);
  border-radius: 4px;
  outline-offset: 3px;
}


button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;
}
`;

export default GlobalStyles; */
