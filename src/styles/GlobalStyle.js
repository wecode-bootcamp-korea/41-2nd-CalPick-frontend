import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset}

* {
    box-sizing: border-box;
    font-family: 'Apple SD Gothic Neo', 'Helvetica Neue', sans-serif;
  }
  
.inner {
  width: 1130px;
  margin: auto;
}
`;

export default GlobalStyle;
