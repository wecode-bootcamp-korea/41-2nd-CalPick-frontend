import React, { useState } from 'react';
import * as S from './CalendarStatusModal.styles';

export default function CalendarStatusModal({
  userData,
  deleteID,
  setDeleteID,
  userDataIndex,
}) {
  const [modifyInfo, setModifyInfo] = useState(false);
  const [modifyValues, setModifyValue] = useState({
    title: '',
    content: '',
    start: '',
    end: '',
  });

  const modifyvaildation =
    modifyValues.title.length >= 1 &&
    modifyValues.start.length > 1 &&
    modifyValues.end.length > 1 &&
    modifyValues.content.length >= 1 &&
    modifyValues.start < modifyValues.end &&
    modifyValues.start.length === 10 &&
    modifyValues.end.length === 10;

  const modifyURL = 'http://10.58.52.241:3000/calendar';

  const userTicketIndex = userData.find(item => item.id == deleteID);

  const { title, content, start, end } = userData[userDataIndex];

  const modaloff = e => {
    setDeleteID('');
  };

  const handleModify = () => {
    setModifyInfo(prev => !prev);
  };

  const modifyValue = e => {
    const { name, value } = e.target;
    setModifyValue({ ...modifyValues, [name]: value });
  };

  const deleteUserSchedule = () => {
    fetch(modifyURL, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('accessToken'),
      },
      body: JSON.stringify({
        id: userTicketIndex,
      }),
    });
  };

  const modifyUserSchedule = () => {
    if (modifyvaildation) {
      fetch(modifyURL, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: localStorage.getItem('accessToken'),
        },
        body: JSON.stringify({
          id: userTicketIndex,
          title: modifyValues.title,
          start: modifyValues.start,
          end: modifyValues.end,
          content: modifyValues.content,
          className: 'ticket',
          color: 'pink',
          editable: true,
          startEditable: true,
          durationEditable: true,
          resourceEditable: true,
        }),
      });
    } else {
      alert('?????? ???????????????');
    }
  };

  return (
    <S.StatueModalContainer>
      <S.StateInputDiv>
        <S.TicketInfoLabel text>??? ??? : </S.TicketInfoLabel>
        <S.ModalState onClick={modaloff}>x</S.ModalState>
        <S.TicketInfo
          disabled={modifyInfo ? '' : 'disabled'}
          type="text"
          name="title"
          placeholder={title}
          onChange={modifyValue}
        />
      </S.StateInputDiv>
      <S.StateInputDiv>
        <S.TicketInfoLabel text>??? ??? : </S.TicketInfoLabel>
        <S.TicketInfo
          disabled={modifyInfo ? '' : 'disabled'}
          type="textarea"
          name="content"
          placeholder={content}
          onChange={modifyValue}
        />
      </S.StateInputDiv>
      <S.StateInputDiv>
        <S.TicketInfoLabel>???????????? :</S.TicketInfoLabel>
        <S.TicketInfo
          type={modifyInfo ? 'date' : 'text'}
          disabled={modifyInfo ? '' : 'disabled'}
          placeholder={start}
          name="start"
          onChange={modifyValue}
        />
      </S.StateInputDiv>
      <S.StateInputDiv>
        <S.TicketInfoLabel>???????????? : </S.TicketInfoLabel>
        <S.TicketInfo
          type={modifyInfo ? 'date' : 'text'}
          disabled={modifyInfo ? '' : 'disabled'}
          placeholder={end}
          name="end"
          onChange={modifyValue}
        />
      </S.StateInputDiv>
      <S.BtnFlex>
        {modifyInfo ? (
          <S.StateModify onClick={modifyUserSchedule}>??????</S.StateModify>
        ) : (
          <S.StateModify onClick={handleModify}>??????</S.StateModify>
        )}
        {!modifyInfo && (
          <S.StateModify onClick={deleteUserSchedule}>??????</S.StateModify>
        )}
      </S.BtnFlex>
    </S.StatueModalContainer>
  );
}
