import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;600&display=swap');

    *, *::before, *::after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-tap-highlight-color: transparent;
        outline: none;

        margin: 0;
        padding: 0;
    }

    html {
        font-size: 62.5%; // 1rem === 10px;
    }

    body {
        font-size: 1.6rem;
        font-family: 'Montserrat', sans-serif;
    }

`;

export default GlobalStyle;
