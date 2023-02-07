import styled, { css } from 'styled-components';

export const CardDiv = styled.div`
  position: relative;
  margin: 10px;
  ${props => props.theme.variables.wh('260px', '200px')};
  min-width: 260px;
  border: 1px solid rgb(0, 0, 0, 0.2);
  border-radius: 10px;

  &:hover {
    bottom: 2px;
    box-shadow: 0px 5px 5px 1px rgba(133, 113, 113, 0.2);
    cursor: pointer;
  }
`;

export const CardTitle = styled.div`
  ${props => props.theme.variables.flex('row', 'start', '')}
`;

export const TestState = styled.div`
  margin: 15px 0 10px 10px;
  padding: 8px 4px;
  ${props => props.theme.variables.wh('70px', '')}
  border: 1px solid ${props => props.theme.colors.control};
  border-radius: 10px;
  font-size: ${props => props.theme.fontSize.s};
  font-weight: ${props => props.theme.fontWeight.blod};
  text-align: center;

  ${props =>
    props.test &&
    css`
      background-color: ${props => props.theme.colors.control};
    `}

  ${props =>
    props.blue &&
    css`
      color: white;
      background-color: ${props => props.theme.colors.primary};
    `}
`;

export const TestDay = styled.p`
  margin: 10px;
  padding: 0 0 15px 10px;
  font-size: ${props => props.theme.fontSize.title2};
  border-bottom: 1px solid rgb(0, 0, 0, 0.2);
`;

export const TestWeek = styled.span`
  position: relative;
  left: 1px;
  bottom: 2px;
  color: ${props => props.theme.colors.warning};
  font-size: ${props => props.theme.fontSize.title3};
`;

export const TestDate = styled.ul`
  ${props => props.theme.variables.flex('column', 'start', 'start')}
  color: rgb(0, 0, 0, 0.8);
  font-size: ${props => props.theme.fontSize.m};
`;

export const TestDateList = styled.li`
  margin: 12px 10px 10px 20px;
`;
