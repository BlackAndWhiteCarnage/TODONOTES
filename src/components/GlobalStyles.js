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
        /* --webkit-overflow-scrolling: touch; */
    }
    ::-webkit-scrollbar {
    width: 1rem;
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
    @media screen and (max-width: 680px) {
        ::-webkit-scrollbar {
    width: .5rem;
    }
    }
`;

export default GlobalStyles;
