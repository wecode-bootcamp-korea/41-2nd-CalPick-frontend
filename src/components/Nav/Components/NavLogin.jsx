import React from 'react';
import * as S from './NavLogin.styles';

export default function NavLogin() {
  return (
    <S.LoginSignUp className="inner">
      <S.LoginSignUpText>로그인</S.LoginSignUpText>
      <S.LoginSignUpText>회원가입</S.LoginSignUpText>
    </S.LoginSignUp>
  );
}
