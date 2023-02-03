import styled from 'styled-components';
import { StyledButton } from '../../../components/Button';

export const UserInfoContainer = styled.div`
  ${props => props.theme.variables.flex('', 'center', 'center')}
  position: relative;
  width: 100%;
  border: 2px solid ${props => props.theme.colors.primary};
  border-radius: 3px;
`;

export const Labels = styled.label`
  flex: 3;
  padding: 10px 15px;
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fontSize.title3};
  font-weight: ${props => props.theme.fontWeight.bold};
`;

export const Inputs = styled.input`
  flex: 7;
  height: 100%;
  padding: 10px 20px;
  border: none;
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fontSize.title3};

  &:disabled {
    background-color: ${props => props.theme.colors.control};
  }

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-size: ${props => props.theme.fontSize.m};
  }
`;

export const WarnningMsg = styled.p`
  color: ${props => props.theme.colors.warning};
  font-size: ${props => props.theme.fontSize.s};
`;

export const SmallBtn = styled(StyledButton)`
  ${props => props.theme.variables.wh('50px', '40px')}
  position: absolute;
  right: 0px;
`;

export const Timer = styled.p`
  position: absolute;
  top: 343px;
  left: 250px;
  color: ${props => props.theme.colors.warning};
  font-size: ${props => props.theme.fontSize.s};
`;
