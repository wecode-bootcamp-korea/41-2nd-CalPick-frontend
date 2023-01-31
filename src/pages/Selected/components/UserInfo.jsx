import React from 'react';
import * as S from './UserInfo.styles';

export default function UserInfo() {
  return (
    <>
      {INPUT_LIST.map(({ id, title, placeholder }) => (
        <>
          <S.UserInfoContainer key={id}>
            <S.Labels htmlFor={id}>{title}</S.Labels>
            <S.Inputs
              id={id}
              disabled={id.includes('exam')}
              placeholder={placeholder}
            />
            {id.includes('phone') && (
              <S.SmallBtn color="primary">
                {id === 'phone' ? '인증' : '확인'}
              </S.SmallBtn>
            )}
          </S.UserInfoContainer>
          {id === 'phone' && (
            <S.WarnningMsg>9자 이상 가능합니다.(숫자만)</S.WarnningMsg>
          )}
          {id === 'email' && (
            <S.WarnningMsg>이메일 주소를 다시 확인해주세요.</S.WarnningMsg>
          )}
        </>
      ))}
    </>
  );
}

const INPUT_LIST = [
  { id: 'examName', title: '시험' },
  { id: 'examDate', title: '시험 일정' },
  { id: 'examPlace', title: '고사장' },
  { id: 'examSeat', title: '좌석' },
  { id: 'name', title: '이름' },
  { id: 'phone', title: '휴대폰' },
  { id: 'phoneCheck', title: '인증번호', placeholder: '숫자(6자리)' },
  { id: 'email', title: '이메일' },
];
