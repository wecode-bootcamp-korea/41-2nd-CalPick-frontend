import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SelectForm from './components/SelectForm';
import UserInfo from './components/UserInfo';
import SelectSeat from './components/SelectSeat';
import * as S from './Selected.styles';

export default function Selected() {
  const [seat, setSeat] = useState();
  const [seatId, setSeatId] = useState();
  const [searchParams] = useSearchParams();
  const testName = searchParams.get('testName');
  const testDate = searchParams.get('testDate');
  const testSiteId = searchParams.get('testSiteId');
  const districtName = searchParams.get('districtName');
  const params = {
    testName: testName,
    testDate: testDate,
    testSiteId: testSiteId,
    districtName: districtName,
  };

  const selectSeat = (newSeat, newSeatId) => {
    setSeat(newSeat);
    setSeatId(newSeatId);
  };

  return (
    <S.SelectedContainer className="inner">
      <SelectForm w="45%" title="예약하기">
        <UserInfo seat={seat} seatId={seatId} params={params} />
      </SelectForm>
      <SelectForm w="45%" title="좌석 선택">
        <SelectSeat onButtonClick={selectSeat} params={params} />
      </SelectForm>
    </S.SelectedContainer>
  );
}
