import styled from 'styled-components';
import { StyledButton } from '../../../components/Button';

export const CheckBox = styled.div`
  margin: 6.5vh 10px 0 0;
  padding-top: 10px;
  ${props => props.theme.variables.wh('10vw', '150px')}
  min-width: 130px;
  color: ${props => props.theme.colors.primary};
  border: 2px solid ${props => props.theme.colors.control};
  border-radius: 10px;
`;

export const CheckBoxDiv = styled.div`
  margin-left: 5px;
  padding-bottom: 10px;
`;

export const CheckBoxTitle = styled.p`
  margin: 10px 0 15px 0;
  font-size: ${props => props.theme.fontSize.title3};
  font-weight: ${props => props.theme.fontWeight.blod};
  text-align: center;
`;

export const ChoiceTest = styled.select`
  margin: 0 0 10px 7px;
  ${props => props.theme.variables.wh('110px', '')}
  color: ${props => props.theme.colors.primary};
  border: 1px solid ${props => props.theme.colors.primary};
  text-align: center;
`;

export const CheckBoxType = styled.input`
  padding-bottom: 10px;
  accent-color: ${props => props.theme.colors.primary};
  border: 1px solid ${props => props.theme.colors.primary};
`;

export const CheckBoxList = styled.span`
  padding-left: 2px;
  font-size: ${props => props.theme.fontSize.large};
`;

export const CreateBtnContainer = styled.div`
  margin-top: 20px;
  padding-left: 2.5px;
`;

export const CreateBtn = styled(StyledButton)`
  ${props => props.theme.variables.wh('100%', '')}
`;
