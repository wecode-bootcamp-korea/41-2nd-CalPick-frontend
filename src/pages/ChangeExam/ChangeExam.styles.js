import styled from 'styled-components';

export const ChangeExamContainer = styled.div``;

export const Title = styled.h1`
  margin-top: 100px;
  padding-bottom: 50px;
  text-align: center;
  color: ${({ theme }) => theme.colors.basic};
  font-size: ${({ theme }) => theme.fontSize.title1};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;
