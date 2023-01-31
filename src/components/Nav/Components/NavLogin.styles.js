import styled from 'styled-components';

export const LoginSignUp = styled.div`
  ${props => props.theme.variables.flex('row', 'end', 'center')}
  border-bottom: 1px solid ${props => props.theme.colors.control};
`;

export const LoginSignUpText = styled.p`
  margin: 10px 8px;
  font-size: ${props => props.theme.fontSize.s};

  &:hover {
    color: ${props => props.theme.colors.primary};
    cursor: pointer;
  }
`;
