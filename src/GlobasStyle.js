import { createGlobalStyle } from "styled-components";
import background from "./currency.jpg";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    *, ::before, ::after {
        box-sizing: inherit;
    }

    #root {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        background-image: url("${background}");
        background-size: cover; 
        background-position: center;
        font-family: 'Lato', sans-serif;
    }
`;