import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
    box-sizing: border-box;
    }

    *, ::before, ::after {
    box-sizing: inherit;
    }

    #root {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-image: url("../images/currency.jpg" );
    background-size: cover; 
    background-position: center;
    font-family: Verdana, Tahoma, sans-serif;
    }
`;