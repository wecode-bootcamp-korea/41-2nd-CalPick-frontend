import styled from 'styled-components';

export const ListItemsContainer = styled.ul`
  /* border: 1px solid green; */
  ${({ theme }) => theme.variables.flex}
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.control};

  &:hover {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ListItem = styled.li`
  width: 225px;
  padding: 10px 0;
  line-height: 55px;
  color: ${({ theme }) => theme.colors.basic};
  font-size: ${({ theme }) => theme.fontSize.title3};
`;
