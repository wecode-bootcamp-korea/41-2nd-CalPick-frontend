import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GobalStyle = createGlobalStyle`
${reset}

* {
    box-sizing: border-box;
  }
.inner {
  width: 1130px;
  margin: auto;
}
`;

export default GobalStyle;
