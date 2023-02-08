import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './NavCategoriesIcon.styles';

export default function NavCategoriesIcon({ icon, text, router, accessToken }) {
  const navigete = useNavigate();

  const tokenRouter = () => {
    if (accessToken) {
      navigete(router);
    }
  };

  const anyRouter = () => {
    navigete(router);
  };

  return (
    <S.CategoriesIcon onClick={anyRouter}>
      <div>{icon}</div>
      <S.CategoriesText>{text}</S.CategoriesText>
    </S.CategoriesIcon>
  );
}
