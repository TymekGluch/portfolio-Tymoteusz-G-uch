import { createGlobalStyle } from 'styled-components';
import { COLORS } from './consts/COLORS';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600&family=Six+Caps&display=swap');

    * {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }

    body {
        background-color: ${COLORS.BACKGROUND_COLOR};
        overflow: hidden;
        font-family: Montserrat;
    }
`;

export default GlobalStyle;
