import styled from 'styled-components';
import { StyledButton } from '../../../components/Button';
import { InputStyle } from '../../../components/Input';
import { LabelStyle } from '../../../components/Label';
import { css } from 'styled-components';

export const CalendarModalContaioner = styled.div`
  position: fixed;
  top: 50%;
  left: 38%;
  ${props => props.theme.variables.flex('column', 'center', 'center')}
  margin-top: -20vh;
  padding: 40px 0;
  ${props => props.theme.variables.wh('500px', '')}
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 30px;
  background-color: white;
  z-index: 1;
`;

export const CreateInputContainer = styled.div`
  ${props => props.theme.variables.flex('row', 'center', 'center')}
`;

export const CalendarTitle = styled.p`
  margin-bottom: 30px;
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fontSize.title2};
  font-weight: ${props => props.theme.fontWeight.bold};
`;

export const CreateInput = styled(InputStyle)`
  ${props =>
    props.titles &&
    css`
      margin: 0 10px 10px 30px;
      padding-right: 10px;
      ${props => props.theme.variables.wh('378px', '')}
    `}

  ${props =>
    props.date &&
    css`
      margin-right: 10px;
      ${props => props.theme.variables.wh('150px', '')}
    `}
`;

export const LabelType = styled(LabelStyle)`
  ${props =>
    props.title &&
    css`
      margin: 0 13px;
    `}
`;
export const BtnDiv = styled.div`
  margin-top: 30px;
`;

export const CreateModalBtn = styled(StyledButton)`
  margin: 10px;
  ${props => props.theme.variables.wh('200px', '')}

  &:hover {
    background-color: ${props => props.theme.colors.primary};
    color: white;
  }
`;
