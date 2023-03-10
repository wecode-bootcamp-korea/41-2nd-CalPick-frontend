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

function SignUp() {
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
          alert('??????????????? ??????????????????.');
        }
      });
  };

  const data = [
    { id: 0, title: '???????????? ??????(??????)' },
    { id: 1, title: '?????????,?????? ?????? ?????? ??????(??????)' },
    { id: 2, title: '??????,?????? ?????? ?????? ??????(??????)' },
    { id: 3, title: '?????? ?????? ?????? ??? ?????? ??????(??????)' },
  ];

  const inputCondition = {
    email:
      !emailValid &&
      userInfo.email.length > 0 &&
      '????????? ???????????? ??????????????????.',
    pw:
      !pwValid &&
      userInfo.pw.length > 0 &&
      '??????, ??????, ???????????? ?????? 8??? ?????? ??????????????????.',
    pwConfirm:
      !pwConfirmValid &&
      userInfo.pwConfirm.length > 0 &&
      '??????????????? ??? ??? ??? ??????????????????.',
    birth: !birthValid && userInfo.birth.length > 0 && '???: 1999-11-22',
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
            <S.ThAgree>?????? ?????? ?????? ?????? ??????</S.ThAgree>
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
          ?????? ?????? ??????
        </Button>
      </S.LastDiv>
    </S.Top>
  );
}

export default SignUp;

const USER_INPUT_LIST = [
  { id: 1, type: 'text', placeholder: '?????????', name: 'email' },
  { id: 2, type: 'password', placeholder: '????????????', name: 'pw' },
  { id: 3, type: 'password', placeholder: '??????????????????', name: 'pwConfirm' },
  { id: 4, type: 'text', placeholder: '??????', name: 'name' },
  { id: 5, type: 'text', placeholder: '????????????', name: 'birth' },
];
