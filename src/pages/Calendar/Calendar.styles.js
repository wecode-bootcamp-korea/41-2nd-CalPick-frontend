import styled from 'styled-components';

export const CalendarContainer = styled.div`
  ${props => props.theme.variables.flex('row', 'space-between', 'start')}
  margin: 0 auto;
  ${props => props.theme.variables.wh('90%', '')}
`;

export const CalendarHandle = styled.div`
  ${props => props.theme.variables.flex('column', 'center', '')}
  margin-top: 6.5vh;
`;
