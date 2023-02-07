import styled from 'styled-components';

export const TableContainer = styled.ul`
  ${({ theme }) => theme.variables.flex}
  flex-wrap: wrap;
  border: 1px solid ${({ theme }) => theme.colors.primary};
`;

export const ListItemContainer = styled.li`
  ${({ theme }) => theme.variables.flex}
  flex-wrap: wrap;
  text-align: center;
`;

export const ListItemTitle = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  width: 225px;
  line-height: 55px;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSize.title2};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;
