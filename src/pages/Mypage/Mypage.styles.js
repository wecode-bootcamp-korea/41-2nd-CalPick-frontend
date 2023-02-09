import styled from 'styled-components';

export const MypageContainer = styled.div`
  ${props => props.theme.variables.flex('column', 'center', 'center')}
  gap: 30px;
  ${props => props.theme.variables.wh('', '950px')}
`;

export const MypageTitle = styled.p`
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fontSize.title1};
  font-weight: ${props => props.theme.fontWeight.bold};
`;
