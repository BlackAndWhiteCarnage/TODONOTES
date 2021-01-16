import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *,*::before,*::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        &:hover{
            transform: none;
        }
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
    width: 1rem;
    height: .5rem;
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
    ::selection {
    background: rgba(255, 255, 255, 0.7);
    }
    @media screen and (max-width: 680px) {
        ::-webkit-scrollbar {
    width: .5rem;
    }
    }
`;

export default GlobalStyles;
