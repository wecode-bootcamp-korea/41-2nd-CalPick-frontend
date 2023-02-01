import React from 'react';
import * as S from './CalenderCheckBox.styles';

export default function CalendarCheckBox({
  handleCheckBox,
  handleCreate,
  handleSelect,
  calendarToggle,
}) {
  const { calpick, myCalendar } = calendarToggle;
  return (
    <S.CheckBox>
      <S.CheckBoxTitle>마이 캘린더</S.CheckBoxTitle>
      <S.ChoiceTest onChange={handleSelect}>
        {CALPICKTEST.map((item, idx) => (
          <option key={idx}>{item}</option>
        ))}
      </S.ChoiceTest>

      <S.CheckBoxDiv>
        <S.CheckBoxType
          type="checkbox"
          name="calpick"
          checked={calpick ? 'ckecked' : ''}
          onChange={handleCheckBox}
        />
        <S.CheckBoxList>캘픽 시험 일정</S.CheckBoxList>
      </S.CheckBoxDiv>
      <S.CheckBoxDiv>
        <S.CheckBoxType
          type="checkbox"
          name="myCalendar"
          checked={myCalendar ? 'ckecked' : ''}
          onChange={handleCheckBox}
        />
        <S.CheckBoxList>내 캘린더</S.CheckBoxList>
      </S.CheckBoxDiv>

      <S.CreateBtnContainer>
        <S.CreateBtn size="small" onClick={handleCreate}>
          일정 생성하기
        </S.CreateBtn>
      </S.CreateBtnContainer>
    </S.CheckBox>
  );
}

const CALPICKTEST = ['캘픽', '오캘픽', '캘픽스', '캘픽스피킹'];
