import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *,*::before,*::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        overflow: hidden;
    }
    body{
        font-family: 'Montserrat', sans-serif;
        font-size: 62.5%;
        overflow-y: scroll;
    }
`;

export default GlobalStyles;
