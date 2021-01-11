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
        overflow: hidden;
    }
    ::-webkit-scrollbar {
    width: 1.5rem;
    }
    ::-webkit-scrollbar-track {
    width: 1rem;
    background: #FFFFFF;
    }
    ::-webkit-scrollbar-thumb {
    background: #01C915;
    }
    ::-webkit-scrollbar-thumb:hover {
    background: #00E016;
    }
`;

export default GlobalStyles;
