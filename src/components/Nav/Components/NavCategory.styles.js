import styled from 'styled-components';

export const Category = styled.div`
  ${props => props.theme.variables.flex('row', 'space-between', 'center')}
  border-bottom: 1px solid ${props => props.theme.colors.control};
`;

export const LogoImg = styled.img`
  margin: 10px 0;
  height: 6vh;

  &:hover {
    cursor: pointer;
  }
`;

export const NavCategoryContainer = styled.div`
  ${props => props.theme.variables.flex('row', '', 'center')}
  font-size: ${props => props.theme.fontSize.s};
  text-align: center;
`;
