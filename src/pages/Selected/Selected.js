import React from 'react';
import SelectForm from './components/SelectForm';
import UserInfo from './components/UserInfo';
import SelectSeat from './components/SelectSeat';
import * as S from './Selected.styles';

export default function Selected() {
  return (
    <S.SelectedContainer className="inner">
      <SelectForm w="45%" title="예약하기">
        <UserInfo />
      </SelectForm>
      <SelectForm w="45%" title="좌석 선택">
        <SelectSeat />
      </SelectForm>
    </S.SelectedContainer>
  );
}
