import styled, { css } from 'styled-components';
function Button({ children, size, color, disabled = false, ...props }) {
  const sizeList = {
    large: '340px',
    medium: '240px',
    small: '120px',
  };
  return (
    <StyledButton
      {...props}
      disabled={disabled}
      size={sizeList[size]}
      color={color}
    >
      {children}
    </StyledButton>
  );
}
export default Button;
export const StyledButton = styled.button`
  width: ${props => props.size};
  height: 48px;
  color: ${props =>
    props.color === 'primary' ? 'white' : props.theme.colors.primary};
  background-color: ${props =>
    props.color === 'primary' ? props.theme.colors.primary : 'white'};
  border: 1px solid
    ${props =>
      props.color === 'white'
        ? props.theme.colors.primary
        : props.theme.colors.control};
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
