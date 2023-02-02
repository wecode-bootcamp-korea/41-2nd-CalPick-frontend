import { css } from 'styled-components';

const colors = {
  primary: '#6B95BB',
  opacityPrimary: 'rgba(107, 149, 187, 0.3)',
  basic: '#767676',
  warning: '#E6493B',
  control: '#F1F3F4',
};

const fontSize = {
  title1: '32px',
  title2: '24px',
  title3: '18px',
  l: '16px',
  m: '14px',
  s: '12px',
};

const fontWeight = {
  nomal: 500,
  bold: 700,
};

const lineHeight = {
  xs: '0.125em',
  sm: '0.25em',
  base: '0.5em',
  lg: '0.75em',
  xl: '1em',
};

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
const theme = {
  colors,
  fontSize,
  fontWeight,
  lineHeight,
  variables,
};

export default theme;
