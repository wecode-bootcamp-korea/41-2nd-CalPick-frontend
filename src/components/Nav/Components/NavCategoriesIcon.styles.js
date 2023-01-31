import styled from 'styled-components';

export const CategoriesIcon = styled.div`
  padding-left: 30px;

  &:nth-child(4) {
    padding-left: 20px;
  }

  &:hover {
    color: ${props => props.theme.colors.primary};
    cursor: pointer;
  }
`;

export const CategoriesText = styled.p`
  margin-top: 5px;
`;
