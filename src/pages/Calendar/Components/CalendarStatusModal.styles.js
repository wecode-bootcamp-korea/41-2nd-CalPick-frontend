import styled, { css } from 'styled-components';
import { CalendarModalContaioner } from './CalendarModal.styles';
import { StyledButton } from '../../../components/Button';
import { InputStyle } from '../../../components/Input';
import { LabelStyle } from '../../../components/Label';

export const StatueModalContainer = styled(CalendarModalContaioner)``;

export const ModalState = styled(StyledButton)`
  position: absolute;
  top: 20px;
  right: 30px;
  margin-bottom: 10px;
  ${props => props.theme.variables.wh('20px', '20px')}
`;

export const TicketInfo = styled(InputStyle)`
  ${props => props.theme.variables.wh('300px', '40px')}
  margin: 10px;
  font-size: ${props => props.theme.fontSize.l};
  color: ${props => props.theme.colors.primary};
  font-weight: 500;
  text-align: center;

  &:disabled {
    color: ${props => props.theme.colors.primary};
    background-color: white;
    border: none;
    border-bottom: 1px solid ${props => props.theme.colors.control};
    border-radius: 0;
    background-color: none;

    &::placeholder {
      color: ${props => props.theme.colors.primary};
    }
  }
`;

export const BtnFlex = styled.div`
  ${props => props.theme.variables.flex('row', 'center', 'center')}
`;

export const StateModify = styled(StyledButton)`
  margin: 50px 10px 0 10px;
  ${props => props.theme.variables.wh('80px', '40px')}
`;

export const TicketInfoLabel = styled(LabelStyle)`
  font-size: ${props => props.theme.fontSize.title3};

  ${props =>
    props.text &&
    css`
      margin 0 12px;
    `}
`;

export const StateInputDiv = styled.div`
  ${props => props.theme.variables.flex('row', 'center', 'center')}
`;
