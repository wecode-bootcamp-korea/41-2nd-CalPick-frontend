import styled, { css } from 'styled-components';

function Button({ clickHandler }) {
  return <StyledButton onClick={clickHandler}></StyledButton>;
}

export default Button;

export const StyledButton = styled.button`
  width: ${props => (props.large ? '340px' : '120px')};
  height: 48px;
  color: ${props => (props.white ? props.theme.colors.primary : 'white')};
  background-color: ${props =>
    props.white ? 'white' : props.theme.colors.primary};
  border: 1px solid
    ${props =>
      props.white ? props.theme.colors.primary : props.theme.colors.control};
  border-radius: 4px;
  font-size: 15px;
  font-weight: 700;
  text-align: center;
  letter-spacing: -0.45px;
  opacity: 0.8;
  box-shadow: rgba(31, 140, 230, 0.3) 0px 1px 1px 0px;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  &:disabled {
    opacity: 0.3;
  }
`;
