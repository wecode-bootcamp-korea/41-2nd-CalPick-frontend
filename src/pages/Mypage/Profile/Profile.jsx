import React, { useEffect, useState } from 'react';
import Button from '../../../components/Button';
import * as S from './Profile.styles';

export default function Profile() {
  const [userInfo, setUserInfo] = useState([]);
  const [testInfo, setTestInfo] = useState([]);

  useEffect(() => {
    fetch('./data/userInfo.json')
      .then(res => res.json())
      .then(data => setUserInfo(data));
  }, []);

  useEffect(() => {
    fetch('./data/testInfo.json')
      .then(res => res.json())
      .then(data => setTestInfo(data));
  }, []);

  return (
    <S.ProfileContainer>
      <S.ProfileHeader>하평안님의 프로필</S.ProfileHeader>
      <S.ProfileWrap>
        <S.ProfileBox>
          <S.UserName>하*안</S.UserName>
          <S.UserInfo>
            {userInfo.map(({ id, title, data }) => (
              <S.UserInfoList key={id}>
                {title} : {data}
              </S.UserInfoList>
            ))}
            <Button size="small" color="primary">
              시험접수내역확인
            </Button>
          </S.UserInfo>
        </S.ProfileBox>
        <S.ScoreBox>
          {testInfo.map(({ id, title, data }) => (
            <S.TestCard key={id}>
              <S.TestName>{title}</S.TestName>
              <S.TestScore>{data}</S.TestScore>
            </S.TestCard>
          ))}
        </S.ScoreBox>
      </S.ProfileWrap>
    </S.ProfileContainer>
  );
}
