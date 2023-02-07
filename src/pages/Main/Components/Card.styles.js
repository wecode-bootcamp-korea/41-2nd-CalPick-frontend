import styled from 'styled-components';

export const CardsContainer = styled.div`
  position: relative;
  ${props => props.theme.variables.wh('100%', '')}
`;

export const CardsLayout = styled.div`
  margin-top: 10px;
  overflow-x: hidden;
`;

export const CardsBtnDiv = styled.div`
  display: ${props => (props.props ? 'none' : '')};
`;

export const CardsCarouselBtn = styled.button`
  position: absolute;
  top: 124px;
  left: ${props => props.left};
  right: ${props => props.right};
  color: ${props => props.theme.colors.primary};
  background-color: rgb(255, 255, 255, 0);
  border: none;
  z-index: 1;

  &:hover {
    top: 122px;
    cursor: pointer;
  }
`;

export const MainTitle = styled.div`
  ${props => props.theme.variables.flex('row', 'space-between', '')}
  margin-bottom: 20px;
`;

export const TestTitle = styled.p`
  padding-top: 10px;
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fontSize.title3};
  font-weight: ${props => props.theme.fontWeight.bold};
`;

export const AllTestLink = styled.p`
  padding-top: 10px;
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fontSize.title3};
  font-weight: ${props => props.theme.fontWeight.bold};
  cursor: pointer;
`;

export const CardsList = styled.div`
  ${props => props.theme.variables.wh('1500px', '220px')}
  transition: transform 1s;
`;

export const CardsDiv = styled.div`
  position: absolute;
  display: flex;
  transition: 1s;
`;
