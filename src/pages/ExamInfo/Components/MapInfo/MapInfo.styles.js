import styled from 'styled-components';

export const MapInfoLayout = styled.div`
  position: relative;
  ${({ theme }) => theme.variables.flex('', 'center')};
  padding: 40px 0;
  background-color: ${({ theme }) => theme.colors.control};
`;

export const selectedInfo = styled.div`
  ${({ theme }) => theme.variables.wh('340px', '330px')}
  padding: 20px 0;
  background-color: white;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export const SelectedWrap = styled.div`
  flex: 1;
  ${({ theme }) => theme.variables.wh('space-between', '')}
  margin: 15px 30px;
  padding: 5px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.control};

  &:last-child {
    border-bottom: none;
  }
`;

export const SelectedTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSize.title3};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primary};
`;

export const SelectedContent = styled.div`
  padding: 5px 0;
  font-size: ${({ theme }) => theme.fontSize.title3};
  color: ${({ theme }) => theme.colors.basic};
`;

export const ButtonContainer = styled.div`
  position: absolute;
  right: 185px;
  bottom: 37px;
`;
