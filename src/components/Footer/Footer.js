import React from 'react';
import S from './Footer.styles';

function Footer() {
  return (
    <S.Top>
      <S.TopFirst>
        <S.UlFirst>
          <S.LiFirst>
            <S.Center src="./images/center.png" />
            <span>고객센터</span>
          </S.LiFirst>
          <S.LiSecond>
            <S.Megaphone src="./images/megaphone.png" />
            <span>공지사항</span>
          </S.LiSecond>
        </S.UlFirst>
        <S.Second>
          <S.Service>
            <h3>서비스</h3>
            <S.UlSecond>
              <S.LiThird>
                {MENU_LIST.map(menuList => {
                  return (
                    <S.MapFirst key={menuList.id}>
                      {menuList.menuName}
                    </S.MapFirst>
                  );
                })}
              </S.LiThird>
            </S.UlSecond>
          </S.Service>
        </S.Second>
        <S.Fi>
          <S.FiFirst>
            <h3>기타 문의</h3>
            <S.UlThird>
              <S.LiEight>
                {MENU_LIST_SECOND.map(menuList => {
                  return (
                    <S.MapSecond key={menuList.id}>
                      {menuList.menuName}
                    </S.MapSecond>
                  );
                })}
              </S.LiEight>
            </S.UlThird>
          </S.FiFirst>
          <S.FiSecond>
            <h3>회사</h3>
            <S.UlFourth>
              <S.LiTenth>
                {MENU_LIST_THIRD.map(menuList => {
                  return (
                    <S.MapThird key={menuList.id}>
                      {menuList.menuName}
                    </S.MapThird>
                  );
                })}
              </S.LiTenth>
            </S.UlFourth>
          </S.FiSecond>
        </S.Fi>

        <S.App>
          <S.Facebook src="./images/facebook.png" />
          <S.Instagram src="./images/instagram.png" />
          <S.Youtube src="./images/youtube.png" />
        </S.App>
      </S.TopFirst>
      <S.Bottom>
        <div>
          <S.SpanFirst>Calpick(주) 사업자 정보</S.SpanFirst>
          <S.Arrow src="./images/arrow.png" />
        </div>
        <S.UlFifth>
          <S.LiTwelfth>
            <span>이용약관</span>
          </S.LiTwelfth>
          <S.LiThirteenth>
            <span>개인정보 처리방침</span>
          </S.LiThirteenth>
          <S.LiFourteenth>
            <span>청소년보호정책</span>
          </S.LiFourteenth>
          <S.LiFifteenth>
            <span>사업자정보확인</span>
          </S.LiFifteenth>
        </S.UlFifth>
        <div>
          <S.SpanSecond>© Calpick Corp.</S.SpanSecond>
        </div>
      </S.Bottom>
    </S.Top>
  );
}

export default Footer;

export const MENU_LIST = [
  { id: 1, menuName: 'Calpick페이퍼' },
  { id: 2, menuName: '제휴카드' },
  { id: 3, menuName: '뷰어 다운로드' },
  { id: 4, menuName: 'CP사이트' },
  { id: 5, menuName: '라디셀렉트 B2B' },
];

export const MENU_LIST_SECOND = [
  { id: 1, menuName: '콘텐츠 제공 문의' },
  { id: 2, menuName: '사업 제휴 문의' },
];

export const MENU_LIST_THIRD = [
  { id: 1, menuName: '회사 소개' },
  { id: 2, menuName: '인재채용' },
];
