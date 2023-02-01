import React, { useState } from 'react';
import Label from '../../../components/Label';
import * as S from './CalendarModal.styles';

export default function CalendarModal({ createFn }) {
  const [calendarCreateInfo, setCalendarCreatreInfo] = useState({
    title: '',
    start: '',
    end: '',
    content: '',
  });

  const token = localStorage.getItem('accessToken');

  const url = 'http://10.58.52.203:3000/calendar';

  const { title, start, end, content } = calendarCreateInfo;

  const InputValidation =
    title.length >= 1 &&
    start.length > 1 &&
    end.length > 1 &&
    content.length >= 1 &&
    start < end &&
    start.length === 10 &&
    end.length === 10;

  const getUserCreateInputValue = e => {
    const { name, value } = e.target;
    setCalendarCreatreInfo({ ...calendarCreateInfo, [name]: value });
  };

  const createUserSchedule = () => {
    if (InputValidation) {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: token,
        },
        body: JSON.stringify({
          title: title,
          start: start,
          end: end,
          content: content,
          className: 'ticket',
          color: 'pink',
          editable: true,
          startEditable: true,
          durationEditable: true,
          resourceEditable: true,
        }),
      });
    } else {
      alert('다시 입력하세요');
    }
  };

  return (
    <S.CalendarModalContaioner>
      <S.CalendarTitle>일정 추가하기</S.CalendarTitle>
      {CREATEINFO.map(({ id, title, type, name }) => (
        <form key={id}>
          <S.LabelType>{title}</S.LabelType>
          <S.CreateInput
            titles
            name={name}
            type={type}
            onChange={getUserCreateInputValue}
          />
        </form>
      ))}
      <S.CreateInputContainer>
        {CREATEDATE.map(({ id, title, type, name }) => (
          <form key={id}>
            <Label>{title}</Label>
            <S.CreateInput
              date
              type={type}
              name={name}
              onChange={getUserCreateInputValue}
            />
          </form>
        ))}
      </S.CreateInputContainer>
      <S.BtnDiv>
        <S.CreateModalBtn onClick={createUserSchedule}>
          일정 추가
        </S.CreateModalBtn>
        <S.CreateModalBtn onClick={createFn}>취소</S.CreateModalBtn>
      </S.BtnDiv>
    </S.CalendarModalContaioner>
  );
}

const CREATEINFO = [
  { id: 1, title: '제목 : ', type: 'text', name: 'title' },
  { id: 2, title: '내용 : ', type: 'textarea', name: 'content' },
];

const CREATEDATE = [
  { id: 1, title: '시작 일자 : ', type: 'date', name: 'start' },
  { id: 2, title: '종료 일자 : ', type: 'date', name: 'end' },
];
