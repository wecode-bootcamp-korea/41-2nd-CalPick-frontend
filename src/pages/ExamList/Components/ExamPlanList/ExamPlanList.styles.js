import styled from 'styled-components';

export const ListItem = styled.div`
  width: 281px;
  padding: 25px 0 10px 0;
  font-size: ${({ theme }) => theme.fontSize.title3};

  &:last-child {
    padding: 10px 0;
  }
`;
