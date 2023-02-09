import styled from 'styled-components';

export const OrderContainer = styled.div`
  ${props => props.theme.variables.flex('column', 'center', 'center')}
  ${props => props.theme.variables.wh('50vw', '50vh')}
`;

export const BubbleContainer = styled.div`
  ${props => props.theme.variables.flex('', 'center', 'center')}
  flex: 2;
  position: relative;
  ${props => props.theme.variables.wh('800px', '')}
`;

export const OrderBubble = styled.div`
  position: absolute;
  top: 60px;
  width: 300px;
  text-align: center;
  background: ${props => props.theme.colors.primary};
  color: #fff;
  padding: 30px;
  border-radius: 20rem;
  font-size: ${props => props.theme.fontSize.title3};
  font-weight: ${props => props.theme.fontWeight.bold};
  box-shadow: 2px 2px 3px #d1d1d1;
  z-index: -1;

  &:after {
    top: 100%;
    left: 90px;
    border: solid transparent;
    content: ' ';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-color: rgba(56, 77, 157, 0);
    border-top-color: ${props => props.theme.colors.primary};
    border-width: 11px;
    margin-left: 0px;
  }
`;

export const OrderIcons = styled.div`
  ${props => props.theme.variables.flex('', 'center', 'center')}
  flex: 1;
  ${props => props.theme.variables.wh('80px', '80px')}
  border-radius: 50%;
  background-color: ${props => props.theme.colors.control};
`;

export const OrderMessage = styled.p`
  ${props => props.theme.variables.flex('', 'center', 'center')}
  flex: 2;
  color: ${props => props.theme.colors.basic};
  line-height: 1.5;
`;
