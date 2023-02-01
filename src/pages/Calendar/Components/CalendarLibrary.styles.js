import styled from 'styled-components';

export const FullCalendarContainer = styled.div`
  ${props => props.theme.variables.wh('90vw', '')}

  .ticket {
    padding: 7px;
    font-size: ${props => props.theme.fontSize.m};
  }
`;
