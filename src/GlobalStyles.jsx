import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html{
    width: auto;
}

body{
    max-width: 100vw;
    height: 100vh;
    background-color: #e6e6e6;
    font-family: 'Google Sans Code';
}
`;
