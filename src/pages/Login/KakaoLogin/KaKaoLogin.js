import React from 'react';
import { useNavigate } from 'react-router-dom';

const KaKaoLogin = () => {
  const code = new URL(window.location.href).searchParams.get('code');
  const navigate = useNavigate();

  fetch('http://10.58.52.241:3001/user/redirect', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      code: code,
    },
    body: JSON.stringify({
      code: code,
    }),
  })
    .then(res => res.json())
    .then(data => {
      if (data.accessToken) {
        navigate('/');
        localStorage.setItem('accessToken', data.accessToken);
      } else {
        navigate('/login');
        alert('로그인을 해주세요');
      }
    });
  return <div></div>;
};

export default KaKaoLogin;
