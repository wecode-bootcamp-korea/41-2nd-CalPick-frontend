import styled from 'styled-components';

export const ExamTitleContainer = styled.div`
  margin-top: 20px;
`;

export const ExamTitle = styled.span`
  border: 1px solid ${({ theme }) => theme.colors.control};
  padding: 15px 22px 15px 15px;
  margin-right: 10px;
  /* border-radius: 10px; */
  background-color: ${({ theme }) => theme.colors.control};
  font-size: ${({ theme }) => theme.fontSize.title3};
  color: ${({ theme }) => theme.colors.basic};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ExamInput = styled.input`
  width: 1px;
  height: 1px;
  opacity: 0;

  &:checked + label {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
`;

export const ExamLabel = styled.label``;

export const TableTitle = styled.h1`
  /* border: 1px solid red; */
  margin: 80px 0 50px 0;
  padding: 30px 0;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.title1};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.basic};
`;

export const TableContainer = styled.ul`
  ${({ theme }) => theme.variables.flex}
  flex-wrap: wrap;
  border: 1px solid ${({ theme }) => theme.colors.primary};
`;

export const ListItemContainer = styled.li`
  ${({ theme }) => theme.variables.flex}
  border-bottom: 1px solid  ${({ theme }) => theme.colors.control};
  text-align: center;
  color: ${({ theme }) => theme.colors.basic};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
`;

export const ListItemTitle = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  width: 281px;
  padding: 20px 0;
  font-size: ${({ theme }) => theme.fontSize.title2};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primary};
`;
