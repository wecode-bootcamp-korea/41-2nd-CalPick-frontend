import React from 'react';
import * as S from './SelectForm.styles';

export default function SelectForm({ w, title, children }) {
  return (
    <S.SelectFormContainer w={w}>
      <S.Title>{title}</S.Title>
      <S.SelectContents>{children}</S.SelectContents>
    </S.SelectFormContainer>
  );
}
