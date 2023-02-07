import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import S from './SignUp.styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

const emailRegex =
  /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

const pwRegex =
  /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;

const pwConfirmRegex =
  /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;

const birthRegex =
  /^(19[0-9][0-9]|20\d{2})-(0[0-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;

function Signup() {
  const [userInfo, setUserInfo] = useState({
    email: '',
    pw: '',
    pwConfirm: '',
    name: '',
    birth: '',
  });

  const emailValid = emailRegex.test(userInfo.email);
  const pwValid = pwRegex.test(userInfo.pw);
  const pwConfirmValid = pwConfirmRegex.test(userInfo.pwConfirm);
  const birthValid = birthRegex.test(userInfo.birth);

  const [checkItems, setCheckItems] = useState([]);
  const [notAllow, setNotAllow] = useState(true);

  const handleCommon = e => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleAllcheck = checked => {
    if (checked) {
      const idArray = [];
      data.forEach(el => idArray.push(el.id));
      setCheckItems(idArray);
    } else {
      setCheckItems([]);
    }
  };

  const handleSingleCheck = (checked, id) => {
    if (checked) {
      setCheckItems(prev => [...prev, id]);
    } else {
      setCheckItems(checkItems.filter(el => el !== id));
    }
  };

  useEffect(() => {
    if (emailValid && pwValid && pwConfirmValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [emailValid, pwValid, pwConfirmValid]);

  const navigate = useNavigate();

  const clickHandler = () => {
    fetch('http://10.58.52.241:3000/user/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        email: userInfo.email,
        password: userInfo.pwConfirm,
        name: userInfo.name,
      }),
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          navigate('/main');
        } else {
          alert('회원가입에 실패했습니다.');
        }
      });
  };

  const data = [
    { id: 0, title: '이용약관 동의(필수)' },
    { id: 1, title: '이벤트,혜택 알림 수신 동의(선택)' },
    { id: 2, title: '성별,생년 정보 제공 동의(선택)' },
    { id: 3, title: '개인 정보 수집 및 이용 동의(필수)' },
  ];

  const inputCondition = {
    email:
      !emailValid &&
      userInfo.email.length > 0 &&
      '올바른 이메일을 입력해주세요.',
    pw:
      !pwValid &&
      userInfo.pw.length > 0 &&
      '영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.',
    pwConfirm:
      !pwConfirmValid &&
      userInfo.pwConfirm.length > 0 &&
      '비밀번호를 한 번 더 입력해주세요.',
    birth: !birthValid && userInfo.birth.length > 0 && '예: 1999-11-22',
  };

  return (
    <S.Top>
      <S.LogoTop src="./images/logo.png" />
      {USER_INPUT_LIST.map(list => {
        return (
          <React.Fragment key={list.id}>
            <S.DivContainer>
              <Input
                type={list.type}
                placeholder={list.placeholder}
                name={list.name}
                onChange={handleCommon}
              />
            </S.DivContainer>
            <S.ErrorMessage>{inputCondition[list.name]}</S.ErrorMessage>
          </React.Fragment>
        );
      })}
      <S.FirstTable>
        <S.TheadFirst>
          <tr>
            <th>
              <S.InputSixth
                type="checkbox"
                name="select-all"
                onChange={e => handleAllcheck(e.target.checked)}
                checked={checkItems.length === data.length ? true : false}
              />
            </th>
            <S.ThAgree>선택 포함 전체 약관 동의</S.ThAgree>
          </tr>
        </S.TheadFirst>
        <tbody>
          {data?.map((data, key) => (
            <tr key={key}>
              <td>
                <S.InputLast
                  type="checkbox"
                  name={`select-${data.id}`}
                  onChange={e => handleSingleCheck(e.target.checked, data.id)}
                  checked={checkItems.includes(data.id)}
                />
              </td>
              <td className="second-row">{data.title}</td>
            </tr>
          ))}
        </tbody>
      </S.FirstTable>
      <S.LastDiv>
        <Button size="large" onClick={clickHandler} disabled={notAllow}>
          회원 가입 완료
        </Button>
      </S.LastDiv>
    </S.Top>
  );
}

export default Signup;

const USER_INPUT_LIST = [
  { id: 1, type: 'text', placeholder: '이메일', name: 'email' },
  { id: 2, type: 'password', placeholder: '비밀번호', name: 'pw' },
  { id: 3, type: 'password', placeholder: '비밀번호확인', name: 'pwConfirm' },
  { id: 4, type: 'text', placeholder: '이름', name: 'name' },
  { id: 5, type: 'text', placeholder: '생년월일', name: 'birth' },
];
