import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GobalStyle = createGlobalStyle`
${reset}

* {
    box-sizing: border-box;
  }

`;

export default GobalStyle;
