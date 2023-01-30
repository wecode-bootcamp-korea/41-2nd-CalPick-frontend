import React from 'react';
import styled from 'styled-components';
import { textStyle } from '../../styles/utils';

export default function Login() {
  return (
    <div>
      <S.Title>hello</S.Title>
    </div>
  );
}

const S = {
  Title: styled.h1`
    ${textStyle('xl')}
  `,
};
