import { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import InteractionPlugin from '@fullcalendar/interaction';
import * as S from './CalendarLibrary.styles';

export function CalendarLibrary({
  CheckBoxStatus,
  testData,
  userData,
  testUrl,
  selectDeleteID,
}) {
  const changeUserEventInfo = {
    id: '',
    title: '',
    start: '',
    end: '',
    contents: '',
    className: 'ticket',
    color: 'pink',
    editable: 1,
    startEditable: 1,
    durationEditable: 1,
    resourceEditable: 1,
  };
  const [targetID, setTargetID] = useState(changeUserEventInfo);
  const { calpick, myCalendar } = CheckBoxStatus;

  const renderEventContent = eventInfo => {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    );
  };

  const handleTicketInfo = ({ event }) => {
    const id = event.id;
    const title = event.title;
    const start = event.start.toISOString().slice(0, 9);
    const end = event.end.toISOString().slice(0, 9);
    setTargetID({ ...targetID, id: id, title: title, start: start, end: end });
    fetch(testUrl, {
      method: 'UPDATE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('accessToken'),
      },
      body: { ...targetID },
    });

    setTargetID(changeUserEventInfo);
  };

  const selectCalendarList = () => {
    if (calpick && myCalendar) {
      const examsData = [...testData];
      const totalData = examsData.concat(...userData);
      return totalData;
    } else if (calpick) {
      return testData;
    } else if (myCalendar) {
      return userData;
    }
  };

  return (
    <S.FullCalendarContainer>
      <FullCalendar
        id="testid"
        plugins={[dayGridPlugin, InteractionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: '',
          center: 'title',
          right: 'today prev,next',
        }}
        events={selectCalendarList()}
        eventDrop={handleTicketInfo}
        eventContent={renderEventContent}
        height={'80vh'}
        eventColor="#6B95BB"
        eventClick={selectDeleteID}
      />
    </S.FullCalendarContainer>
  );
}
