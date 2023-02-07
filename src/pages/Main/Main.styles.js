import styled from 'styled-components';

export const MainContainer = styled.div`
  position: relative;
  ${props => props.theme.variables.wh('100%', '')}
`;

export const EventCarousel = styled.div`
  ${props => props.theme.variables.wh('', '203px')}
  overflow-x: hidden;
`;

export const EventContainer = styled.div`
  position: relative;
  margin-bottom: 50px;
  transition: transform 1s;
`;

export const EventImg = styled.div`
  position: absolute;
  ${props => props.theme.variables.flex('row', 'start', 'start')}
  transition: 1s;
`;

export const CardContainer = styled.div`
  margin-top: 20px;
`;
