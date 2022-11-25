import { createGlobalStyle } from "styled-components";
import theme from "./Theme";

export const GlobalStyles = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        letter-spacing: 0.7px;
        text-decoration: none;
        scroll-behavior: smooth;
    }

    html, body {
        min-height: 100vh;
    }

    body {
        font-size: ${theme.fonts.sizes.base};
        font-family: ${theme.fonts.styles.paragraph};
        background-color: #ccc;
    }

    .darkbackground {
        color: ${theme.colors.lightcolor};
        background-color:${theme.colors.darkcolor};

        a {
            color: ${theme.colors.lightcolor};

            &:hover {
                color: ${theme.colors.accentcolor};
            }
        }

        button {
            color: ${theme.colors.darkcolor};
            background-color:${theme.colors.lightcolor};
        }
    }

    .lightbackground {
        color: ${theme.colors.darkcolor};
        background-color:${theme.colors.lightcolor};

        a {
            color: ${theme.colors.darkcolor};

            &:hover {
                color: ${theme.colors.accentcolor};
            }
        }

        button {
            color: ${theme.colors.lightcolor};
            background-color:${theme.colors.darkcolor};
        }
    }

    ul {
        list-style-type: none;
    }

    body::-webkit-scrollbar {
        width: 5px;
    }
    
    body::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }
    
    body::-webkit-scrollbar-thumb {
        background-color: darkgrey;
        outline: 1px solid slategrey;
        border-radius: 5px;
    }

`;