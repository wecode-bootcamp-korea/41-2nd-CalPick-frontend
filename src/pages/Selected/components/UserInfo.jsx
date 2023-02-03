import React, { useEffect, useState, useRef } from 'react';
import { API } from '../../../config';
import { loadTossPayments } from '@tosspayments/payment-sdk';
import { useInput } from '../../../hooks/useInput';
import Button from '../../../components/Button';
import * as S from './UserInfo.styles';
import { useNavigate } from 'react-router-dom';

const INPUT_LIST = [
  { id: 'testName', title: '시험' },
  { id: 'testDate', title: '시험 일정' },
  {
    id: 'testsiteName',
    title: '고사장',
  },
  { id: 'testSeats', title: '좌석' },
  { id: 'name', title: '이름' },
  {
    id: 'phone',
    title: '휴대폰',
    type: 'number',
    handleKeyDown: e => {
      if (e.keyCode === 69) e.preventDefault();
    },
  },
  {
    id: 'phoneCheck',
    title: '인증번호',
    placeholder: '숫자(6자리)',
    type: 'number',
    handleKeyDown: e => {
      if (e.keyCode === 69) e.preventDefault();
    },
  },
  { id: 'email', title: '이메일' },
];

const KEYS = INPUT_LIST.map(({ id }) => id);
const initialState = KEYS.reduce((result, id) => ({ ...result, [id]: '' }), {});

const clientKey = process.env.REACT_APP_CLIENT_KEY;

export default function UserInfo({ seat, seatId, params }) {
  const [minutes, setMinutes] = useState(parseInt(5));
  const [seconds, setSeconds] = useState(parseInt(0));
  const userInfo = useInput(initialState);
  const { testName, testDate, testSiteId, districtName } = params;
  const { phone, phoneCheck, email, testSeats, name } = userInfo.info;
  const timer = useRef(null);
  const navigate = useNavigate();
  const date = new Date();
  if (seat) {
    userInfo.info.testSeats = seat;
  }

  const dateFormat = date => {
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    month = month >= 10 ? month : '0' + month;
    day = day >= 10 ? day : '0' + day;
    hour = hour >= 10 ? hour : '0' + hour;
    minute = minute >= 10 ? minute : '0' + minute;
    second = second >= 10 ? second : '0' + second;

    return `${date.getFullYear()}-${month}-${day} ${hour}:${minute}:${second}`;
  };

  useEffect(() => {
    fetch(
      `${API.userInfo}?testName=${testName}&testDate=${testDate}&provinceName=서울&districtName=${districtName}&testSiteId=${testSiteId}`
    )
      .then(res => res.json())
      .then(data => userInfo.setValues({ ...userInfo.info, ...data[0] }));
  }, []);

  const handlePhoneCheckBtn = e => {
    e.preventDefault();
    let s = parseInt(seconds);
    let m = parseInt(minutes);
    timer.current = setInterval(() => {
      if (s > 0) {
        setSeconds(--s);
      }
      if (s === 0) {
        if (m === 0) {
          clearInterval(timer.current);
        } else {
          setMinutes(--m);
          setSeconds(59);
          s = 59;
        }
      }
    }, 1000);

    fetch(`${API.verifi}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: process.env.REACT_APP_AUTHORIZATION,
      },
      body: JSON.stringify({
        mobile: phone,
      }),
    });
  };

  const handleSubmitCode = e => {
    e.preventDefault();
    clearInterval(timer.current);
    setMinutes(5);
    setSeconds(0);

    fetch(`${API.verifi}/code`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: process.env.REACT_APP_AUTHORIZATION,
      },
      body: JSON.stringify({
        mobile: phone,
        code: phoneCheck,
        sentDate: dateFormat(date),
      }),
    })
      .then(res => res.json())
      .then(data => alert(JSON.stringify(data.message)));
  };

  const handleSubmitInfo = e => {
    e.preventDefault();
    fetch(`${API.order}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: process.env.REACT_APP_AUTHORIZATION,
      },
      body: JSON.stringify({
        orderName: userInfo.info.testName,
        totalAmount: 3000,
        testId: seatId,
        seatInfo: testSeats,
      }),
    })
      .then(res => res.json())
      .then(data => {
        loadTossPayments(clientKey).then(tossPayments => {
          tossPayments.requestPayment('카드', data).catch(error => {
            if (error.code === 'USER_CANCEL') {
              navigate('/order?payment=user_cancel');
            } else if (error.code === 'INVAILD_CARD_COMPANY') {
              navigate('/order?payment=invaild_card');
            }
          });
        });
      });
  };

  const isPhoneVaild = phone.length >= 9;
  const codeUnderSix = phoneCheck.length < 6;
  const codeOverTen = phoneCheck.length > 10;
  const isEmailVaild = email.includes('@');
  const isAllChecked =
    testSeats !== '' &&
    name !== '' &&
    isPhoneVaild &&
    phoneCheck !== '' &&
    isEmailVaild;

  const inputMessageCondition = {
    phone: isPhoneVaild ? '가능합니다!' : '9자 이상 가능합니다.(숫자만)',
    phoneCheck:
      (codeUnderSix && '6자리를 입력해주세요.') ||
      (codeOverTen && '9자 이상 가능합니다.(숫자만)'),
    email: !isEmailVaild && '이메일 주소를 다시 확인해주세요.',
  };

  return (
    <>
      {INPUT_LIST.map(({ id, title, placeholder, type, handleKeyDown }) => (
        <React.Fragment key={id}>
          <S.UserInfoContainer>
            <S.Labels htmlFor={id}>{title}</S.Labels>
            <S.Inputs
              id={id}
              disabled={id.includes('test')}
              placeholder={placeholder}
              name={id}
              value={userInfo.info[id]}
              onChange={userInfo.handleInput}
              type={type}
              onKeyDown={handleKeyDown}
            />
            {id === 'phone' && (
              <S.SmallBtn color="primary" onClick={e => handlePhoneCheckBtn(e)}>
                인증
              </S.SmallBtn>
            )}
            {id === 'phoneCheck' && (
              <S.SmallBtn color="primary" onClick={e => handleSubmitCode(e)}>
                확인
              </S.SmallBtn>
            )}
          </S.UserInfoContainer>
          <S.WarnningMsg>{inputMessageCondition[id]}</S.WarnningMsg>
        </React.Fragment>
      ))}
      <S.Timer>
        {minutes} : {('0' + seconds).slice(-2)}
      </S.Timer>
      <Button
        size="large"
        color="primary"
        onClick={handleSubmitInfo}
        disabled={!isAllChecked}
      >
        결제하기
      </Button>
    </>
  );
}
