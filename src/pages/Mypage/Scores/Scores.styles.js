import styled from 'styled-components';

export const ScoresContainer = styled.div`
  ${props => props.theme.variables.flex('column', 'center', 'center')}
  gap: 20px;
  ${props => props.theme.variables.wh('100%', '30vh')};
`;

export const ScoreHeader = styled.h3`
  margin-top: 50px;
  text-align: start;
  color: ${props => props.theme.colors.basic};
  font-size: ${props => props.theme.fontSize.title2};
  font-weight: ${props => props.theme.fontWeight.bold};
`;

export const ScoreWrap = styled.div`
  margin-top: 16px;
`;

export const ScoreTableHead = styled.thead`
  th {
    width: 180px;
    padding: 18px 8px 16px;
    border-bottom: 1px solid ${props => props.theme.colors.control};
    vertical-align: middle;
    text-align: center;
    background-color: ${props => props.theme.colors.control};
    color: ${props => props.theme.colors.primary};
    font-size: ${props => props.theme.fontSize.l};
    font-weight: ${props => props.theme.fontWeight.bold};
  }
`;

export const ScoreTableBody = styled.tbody`
  td {
    padding: 18px 8px 16px;
    border-bottom: 1px solid ${props => props.theme.colors.control};
    vertical-align: middle;
    text-align: center;
    color: ${props => props.theme.colors.basic};
    font-size: ${props => props.theme.fontSize.l};
  }
`;
