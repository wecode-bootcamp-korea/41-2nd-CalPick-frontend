import React from 'react';
import styled from 'styled-components';
import { CgClose } from 'react-icons/cg';
import Button from './Button';

export default function Modal({ title, children, buttonTitle }) {
  return (
    <ModalContainer>
      <Title>
        <div />
        <p>{title}</p>
        <CgClose size="24px" />
      </Title>
      <Contents>{children}</Contents>
      <Buttons>
        <Button size="small" color="white">
          취소
        </Button>
        <Button size="small" color="primary">
          {buttonTitle}
        </Button>
      </Buttons>
    </ModalContainer>
  );
}

export const ModalContainer = styled.div`
  ${props => props.theme.variables.flex('column', '', 'center')}
  gap: 20px;
  ${props => props.theme.variables.wh('450px', '550px')}
  border: 5px solid ${props => props.theme.colors.control};
  border-radius: 10px;
`;

export const Title = styled.div`
  ${props => props.theme.variables.flex('', 'space-between', 'center')}
  padding: 0 15px;
  ${props => props.theme.variables.wh('100%', '8vh')}
  color: ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.control};
  font-weight: ${props => props.theme.fontWeight.bold};
  font-size: ${props => props.theme.fontSize.title2};
`;

export const Contents = styled.div`
  ${props => props.theme.variables.wh('85%', '65%')}
`;

export const Buttons = styled.div`
  ${props => props.theme.variables.flex('', 'space-evenly', 'center')}
  ${props => props.theme.variables.wh('85%', '15%')}
`;
