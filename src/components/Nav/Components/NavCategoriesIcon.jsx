import React from 'react';
import * as S from './NavCategoriesIcon.styles';

export default function NavCategoriesIcon({ icon, text }) {
  return (
    <S.CategoriesIcon>
      <div>{icon}</div>
      <S.CategoriesText>{text}</S.CategoriesText>
    </S.CategoriesIcon>
  );
}
