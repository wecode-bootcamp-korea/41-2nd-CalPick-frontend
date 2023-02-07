import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import S from './Login.styles';
import Button from '../../components/Button';
import Input from '../../components/Input';

function Login() {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({ userId: '', userPassword: '' });

  const userIdValid = userInfo.userId.includes('@');
  const userPasswordValid = userInfo.userPassword.length >= 8;

  const isUserInfoGot = userIdValid && userPasswordValid;

  const handleInput = e => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const clickHandler = () => {
    fetch('http://10.58.52.241:3000/user/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        email: userInfo.userId,
        password: userInfo.userPassword,
      }),
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          navigate('/main');
        } else {
          alert('로그인에 실패했습니다.');
        }
      });
  };

  return (
    <S.Top>
      <S.LogoTop src="./images/logo.png" />
      <div>
        <form>
          <S.IdFirst>
            <Input
              type="text"
              placeholder="아이디"
              name="userId"
              onChange={handleInput}
            />
          </S.IdFirst>
          <S.Error>
            {userInfo.userId.length > 0 &&
              (userIdValid || '이메일 형식이 아닙니다.')}
          </S.Error>
          <S.Password>
            <Input
              type="password"
              placeholder="비밀번호"
              name="userPassword"
              onChange={handleInput}
            />
          </S.Password>
          <S.Error>
            {userInfo.userPassword.length > 0 &&
              (userPasswordValid || '비밀번호는 8자 이상입니다.')}
          </S.Error>
        </form>
      </div>
      <S.Login>
        <S.LoginFirst>
          <Button
            size="large"
            color="primary"
            disabled={!isUserInfoGot}
            onClick={clickHandler}
          >
            로그인
          </Button>
        </S.LoginFirst>
        <Button size="large" color="primary">
          회원가입
        </Button>
      </S.Login>
    </S.Top>
  );
}

export default Login;
