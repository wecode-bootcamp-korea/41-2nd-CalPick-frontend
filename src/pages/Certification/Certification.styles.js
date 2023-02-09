import styled from 'styled-components';

export const PageContainer = styled.body`
  ${props => props.theme.variables.flex('column', 'center', 'center')}
  gap: 32px;
  margin: 50px;
`;

export const CertificationContainer = styled.div`
  ${props => props.theme.variables.flex('column', 'center', 'center')}
  ${props => props.theme.variables.wh('790px', '1100px')}
  border: 3px solid ${props => props.theme.colors.primary};
  border-radius: 5px;
`;

export const CertificationHeader = styled.div`
  ${props => props.theme.variables.flex('', 'center', 'center')}
  flex: 2;
  ${props => props.theme.variables.wh('800px', '')}
`;

export const CalpickLogo = styled.img`
  ${props => props.theme.variables.wh('150px', '40px')}
`;

export const CertificationTitle = styled.p`
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fontSize.title1};
  font-weight: ${props => props.theme.fontWeight.bold};
`;

export const CertificationBody = styled.div`
  ${props => props.theme.variables.flex('column', '', '')}
  flex: 8;
  ${props => props.theme.variables.wh('600px', '')}
  margin-bottom: 80px;
  padding-bottom: 30px;
  border: 2px solid ${props => props.theme.colors.primary};
  border-radius: 5px;
`;

export const CertificationInfo = styled.div`
  flex: 6;
`;

export const InfoCard = styled.div`
  ${props => props.theme.variables.flex('row', '', 'center')}
  gap: 3px;
  margin: 30px;
  padding: 10px;
  border: 1px solid ${props => props.theme.colors.control};
`;

export const InfoTitle = styled.p`
  flex: 7;
  padding-left: 20px;
  color: ${props => props.theme.colors.basic};
  font-size: ${props => props.theme.fontSize.title2};
  font-weight: ${props => props.theme.fontWeight.bold};
`;

export const InfoContents = styled.p`
  flex: 3;
  text-align: center;
  padding: 5px 20px;
  margin: 0 20px;
  color: ${props => props.theme.colors.primary};
  border-left: 1px solid ${props => props.theme.colors.control};
  font-weight: ${props => props.theme.fontWeight.bold};
  font-size: ${props => props.theme.fontSize.title3};
`;

export const CertificationScore = styled.div`
  ${props => props.theme.variables.flex('column', 'center', 'center')}
  flex: 4;
`;

export const ScoreTilte = styled.p`
  color: ${props => props.theme.colors.primary};
  font-size: 45px;
  font-weight: ${props => props.theme.fontWeight.bold};
`;

export const Score = styled.p`
  ${props => props.theme.variables.flex('', 'center', 'center')}
  ${props => props.theme.variables.wh('180px', '180px')}
  margin: 20px;
  background-color: ${props => props.theme.colors.control};
  border-radius: 50%;
  color: ${props => props.theme.colors.primary};
  font-size: 40px;
  font-weight: ${props => props.theme.fontWeight.bold};
`;

export const ScoreVerify = styled.img`
  ${props => props.theme.variables.wh('300px', '100px')}
  margin-left: 150px;
  margin-top: 20px;
`;
