import styled from 'styled-components';

export const SelectedInfoLayout = styled.div`
  ${({ theme }) => theme.variables.flex('space-between', '')}
  padding: 15px;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.colors.basic};
  background-color: ${({ theme }) => theme.colors.opacityPrimary};
`;

export const SelectedWrap = styled.div`
  flex: 1;
  ${({ theme }) => theme.variables.wh('space-between', '')}
  padding: 0 30px;
  border-right: 1px solid ${({ theme }) => theme.colors.basic};

  &:last-child {
    border: none;
  }
`;

export const SelectedTitle = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSize.title3};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const SelectedContent = styled.div`
  padding: 15px 0 10px 0;
  font-size: ${({ theme }) => theme.fontSize.title3};
`;
