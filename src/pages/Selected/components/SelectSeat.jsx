import React, { useEffect, useState } from 'react';
import { API } from '../../../config';
import { MdOutlineChairAlt } from 'react-icons/md';
import * as S from './SelectSeat.styles';

export default function SelectSeat({ onButtonClick, params }) {
  const [seats, setSeats] = useState([]);
  const { testName, testDate, testSiteId, districtName } = params;

  useEffect(() => {
    fetch(
      `${API.userInfo}?testName=${testName}&testDate=${testDate}&provinceName=서울&districtName=${districtName}&testSiteId=${testSiteId}`
    )
      .then(res => res.json())
      .then(data => {
        setSeats(data[0].seatInfo);
      });
  }, []);

  const clickSeat = (seatInfo, isBooked, id) => {
    if (!isBooked) {
      onButtonClick(seatInfo, id);
      const changed = [...seats];
      const targetRow = changed.findIndex(seats =>
        seats.some(seat => seat.id === id)
      );
      const targetCol = changed[targetRow].findIndex(seat => seat.id === id);
      changed[targetRow][targetCol].isBooked = 1;
      setSeats(changed);
    } else {
      alert('해당 좌석을 선택할 수 없습니다');
    }
  };

  return (
    <S.SelectSeatContainer>
      <S.ChalkBoard>칠판</S.ChalkBoard>
      <S.Windows>
        <S.SeatInfo>창문</S.SeatInfo>
        <S.SeatInfo>창문</S.SeatInfo>
      </S.Windows>
      <S.Door>문</S.Door>
      <S.Seats>
        {seats.map(seat =>
          seat.map(({ id, seatInfo, isBooked }) => (
            <S.Seat key={id} isbooked={isBooked}>
              <MdOutlineChairAlt
                size="32px"
                onClick={() => clickSeat(seatInfo, isBooked, id)}
              />
            </S.Seat>
          ))
        )}
      </S.Seats>
    </S.SelectSeatContainer>
  );
}
