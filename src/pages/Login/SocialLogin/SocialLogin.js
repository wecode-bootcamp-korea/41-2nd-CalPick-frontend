import React from 'react';
import Button from '../../../components/Button';
import { FcGoogle } from 'react-icons/fc';
import { ButtonText, GoogleLogo } from './SocialLogin.styles';

const parsedHash = new URL(document.location).searchParams;
const accessCode = parsedHash.get('code');

export default function SocialLogin() {
  const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  const GOOGLE_REDIRECT_URI = process.env.REACT_APP_GOOGLE_REDIRECT_URI;

  const GOOGLE_LOGIN_URL = `https://accounts.google.com/o/oauth2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_REDIRECT_URI}&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile`;

  const clickHandler = () => {
    window.location.href = GOOGLE_LOGIN_URL;
  };

  return (
    <Button size="large" color="primary" onClick={clickHandler}>
      <GoogleLogo>
        <FcGoogle
          style={{
            fontSize: '26px',
            marginRight: '10px',
          }}
        />
        <ButtonText> 구글 로그인하기</ButtonText>
      </GoogleLogo>
    </Button>
  );
}
