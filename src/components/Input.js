import React from 'react';
import styled from 'styled-components';

const Input = ({ id, type, disabled = false, required = false, onChange }) => {
  return (
    <InputStyle
      id={id}
      type={type}
      disabled={disabled}
      required={required}
      onChange={onChange}
    />
  );
};

const InputStyle = styled.input`
  width: 340px;
  height: 50px;
  padding-left: 20px;
  font-size: ${props => props.theme.fontSize.l};
  color: ${props => props.theme.colors.primary};
  font-weight: ${props => props.theme.fontWeight.bold};
  border: 2px solid ${props => props.theme.colors.primary};
  border-radius: 5px;

  &:disabled {
    outline: none;
    background-color: ${props => props.theme.colors.control};
    color: ${props => props.theme.colors.primary};
  }

  &:focus {
    outline: none;
    border: 3px solid ${props => props.theme.colors.primary};
  }

  &:invalid {
    outline: none;
    border: 3px solid ${props => props.theme.colors.warning};
  }
`;

export default Input;
