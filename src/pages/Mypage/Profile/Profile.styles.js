import styled from 'styled-components';

export const ProfileContainer = styled.div`
  ${props => props.theme.variables.flex('column', '', '')}
  gap: 20px;
`;

export const ProfileHeader = styled.h3`
  margin-top: 50px;
  color: ${props => props.theme.colors.basic};
  font-size: ${props => props.theme.fontSize.title2};
  font-weight: ${props => props.theme.fontWeight.bold};
`;

export const ProfileWrap = styled.div`
  ${props => props.theme.variables.flex('', '', '')}
  gap: 32px;
`;

export const ProfileBox = styled.div`
  flex: 3;
  margin-top: 16px;
`;

export const UserName = styled.p`
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fontSize.title3};
  font-weight: ${props => props.theme.fontWeight.bold};
`;

export const UserInfo = styled.ul`
  ${props => props.theme.variables.flex('column', '', '')}
  ${props => props.theme.variables.wh('200px', '200px')}
  margin-top: 16px;
`;

export const UserInfoList = styled.li`
  color: ${props => props.theme.colors.basic};
  font-size: ${props => props.theme.fontSize.l};
  margin-bottom: 20px;
`;

export const ScoreBox = styled.div`
  ${props => props.theme.variables.flex('', '', '')}
  gap: 10px;
  flex: 7;
  margin-top: 16px;
`;

export const TestCard = styled.div`
  ${props => props.theme.variables.flex('column', 'center', 'center')}
  gap: 20px;
  ${props => props.theme.variables.wh('150px', '200px')}
  border-radius: 5px;
  background-color: ${props => props.theme.colors.control};
`;

export const TestName = styled.p`
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fontSize.title3};
  font-weight: ${props => props.theme.fontWeight.bold};
`;

export const TestScore = styled.p`
  ${props => props.theme.variables.flex('', 'center', 'center')}
  ${props => props.theme.variables.wh('100px', '100px')}
  border-radius: 50%;
  background-color: white;
  color: ${props => props.theme.colors.basic};
  font-size: ${props => props.theme.fontSize.title1};
  font-weight: ${props => props.theme.fontWeight.bold};
`;
