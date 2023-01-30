import { css } from 'styled-components';

const variables = {
  wh: (w, h) => `
    width: ${w};
    height: ${h};
  `,

  flex: (direction = 'row', justify = '', align = '') => `
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
  `,
};

export default variables;
