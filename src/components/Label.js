import React from 'react';
import styled from 'styled-components';

const Label = ({ htmlFor, children }) => {
  return <LabelStyle htmlFor={htmlFor}>{children}</LabelStyle>;
};

export const LabelStyle = styled.label`
  font-size: ${props => props.theme.fontSize.l};
  color: ${props => props.theme.colors.primary};
  font-weight: ${props => props.theme.fontWeight.bold};
`;

export default Label;
