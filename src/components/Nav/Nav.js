import React from 'react';
import NavLogin from './Components/NavLogin';
import NavCategory from './Components/NavCategory';
import * as S from './Nav.styles';

export default function Nav() {
  return (
    <S.NavContioner>
      <NavLogin />
      <NavCategory />
    </S.NavContioner>
  );
}
