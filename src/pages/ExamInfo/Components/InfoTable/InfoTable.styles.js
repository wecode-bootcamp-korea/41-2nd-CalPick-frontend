import styled from 'styled-components';

export const TableLayout = styled.div`
  position: relative;
  ${({ theme }) => theme.variables.flex('center', 'center')}
  height: 400px;
  margin-bottom: 30px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
`;

export const SelectExam = styled.select`
  position: relative;
  width: 150px;
  margin-bottom: 10px;
  padding: 10px;
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.control};
  border: none;
  font-size: ${({ theme }) => theme.fontSize.title3};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  cursor: pointer;
`;

export const SelectExamTitle = styled.option``;

export const ContentLayout = styled.div`
  flex: 1;
  ${({ theme }) => theme.variables.wh('', '100%')}
  border-left: 2px solid ${({ theme }) => theme.colors.primary};

  &:first-child {
    border-left: none;
  }
`;

export const TableTitle = styled.ul`
  padding: 10px 0 5px 0;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSize.title1};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
`;
