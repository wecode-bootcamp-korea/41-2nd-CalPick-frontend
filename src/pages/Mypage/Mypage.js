import React from 'react';
import Profile from './Profile/Profile';
import Scores from './Scores/Scores';
import * as S from './Mypage.styles';

export default function Mypage() {
  return (
    <S.MypageContainer className="inner">
      <S.MypageTitle>마이페이지</S.MypageTitle>
      <Profile />
      <Scores />
    </S.MypageContainer>
  );
}
