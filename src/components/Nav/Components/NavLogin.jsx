import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './NavLogin.styles';

export default function NavLogin() {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/login');
  };

  const goToSignup = () => {
    navigate('/signup');
  };

  return (
    <S.LoginSignUp className="inner">
      <S.LoginSignUpText onClick={goToLogin}>로그인</S.LoginSignUpText>
      <S.LoginSignUpText onClick={goToSignup}>회원가입</S.LoginSignUpText>
    </S.LoginSignUp>
  );
}
