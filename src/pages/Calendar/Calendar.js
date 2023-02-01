import React, { useEffect, useState } from 'react';
import { CalendarLibrary } from './Components/CalendarLibrary';
import CalendarCheckBox from './Components/CalendarCheckBox';
import CalendarModal from './Components/CalendarModal';
import CalendarStatusModal from './Components/CalendarStatusModal';
import * as S from './Calendar.styles';

const testUrl = 'http://10.58.52.203:3000/calendar/tests';
const userUrl = 'http://10.58.52.203:3000/calendar';

export default function Calendar() {
  const [userData, setUserData] = useState([]);
  const [testData, setTestData] = useState([]);
  const [deleteID, setDeleteID] = useState('');
  const [selectState, setSelectState] = useState(0);
  const [createBtn, setCreateBtn] = useState(false);
  const [calendarToggle, setCalendarToggle] = useState({
    calpick: true,
    myCalendar: true,
  });

  useEffect(() => {
    fetch(testUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('accessToken'),
      },
    })
      .then(res => res.json())
      .then(data => setTestData(data));
  }, []);

  useEffect(() => {
    fetch(userUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('accessToken'),
      },
    })
      .then(res => res.json())
      .then(data => setUserData(data.data));
  }, []);

  let userDataIndex = userData.findIndex(item => item.id == deleteID);

  const handelUserDataModify = data => {
    let truue = data.map(item => ({
      ...item,
      durationEditable: true,
      editable: true,
      resourceEditable: true,
      startEditable: true,
    }));
    return truue;
  };

  const calendarTicket = handelUserDataModify(userData);

  const handleCreate = () => {
    setCreateBtn(prev => !prev);
  };

  const handleCheckBox = e => {
    const { name } = e.target;
    setCalendarToggle({
      ...calendarToggle,
      [name]: !calendarToggle[name],
    });
  };

  const selectDeleteID = ({ event }) => {
    setDeleteID(event.id);
  };

  const handleSelect = e => {
    const { value } = e.target;
    const testType = ['캘픽', '오캘픽', '캘픽스', '캘픽스피킹'];
    const testTypeIndex = testType.findIndex(item => item === value);
    setSelectState(testTypeIndex);
  };

  return (
    <S.CalendarContainer>
      <CalendarCheckBox
        handleCheckBox={handleCheckBox}
        handleCreate={handleCreate}
        handleSelect={handleSelect}
        calendarToggle={calendarToggle}
      />
      <CalendarLibrary
        CheckBoxStatus={calendarToggle}
        testData={testData}
        userData={calendarTicket && calendarTicket}
        testUrl={testUrl}
        selectDeleteID={selectDeleteID}
      />
      {deleteID != '' && (
        <CalendarStatusModal
          userDataIndex={userDataIndex}
          userData={calendarTicket && calendarTicket}
          deleteID={deleteID}
          setDeleteID={setDeleteID}
        />
      )}
      {createBtn && <CalendarModal createFn={handleCreate} />}
    </S.CalendarContainer>
  );
}
