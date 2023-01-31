import React, { useEffect, useState } from 'react';
import { MdOutlineChairAlt } from 'react-icons/md';
import * as S from './SelectSeat.styles';

export default function SelectSeat() {
  const [seats, setSeats] = useState([]);

  useEffect(() => {
    fetch('./data/seats.json')
      .then(res => res.json())
      .then(data => {
        setSeats(data);
      });
  }, [seats]);

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
          seat.map(({ name, isBooked }) => (
            <S.Seat key={name} isbooked={isBooked}>
              <MdOutlineChairAlt size="32px" />
            </S.Seat>
          ))
        )}
      </S.Seats>
    </S.SelectSeatContainer>
  );
}
