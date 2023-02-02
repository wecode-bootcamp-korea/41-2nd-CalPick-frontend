import React from 'react';
import * as S from './TableList.styles';

export default function TablaList({
  title,
  examData,
  districts,
  testSites,
  selectHandler,
}) {
  const data =
    (title === '서울' && districts) ||
    (title === '시험일' && examData) ||
    (title === '고사장' && testSites);

  return (
    <S.InfoListContainer isSeoul={title === '서울'}>
      {data?.map((list, idx) => {
        const testDate = list.testDate;
        console.log(testDate);

        const changeDate = () => {
          const examDate = testDate.split('-');
          return examDate[0] + '년 ' + examDate[1] + '월 ' + examDate[2] + '일';
        };

        return (
          <S.InfoList key={idx} isSeoul={title === '서울'}>
            <S.ListInput
              onChange={e => selectHandler(e, title, list.testDate)}
              type="radio"
              id={
                (title === '시험일' && list.testDate) ||
                (title === '서울' && list.districtName) ||
                (title === '고사장' && list.id)
              }
              name={
                (title === '서울' && 'districts') ||
                (title === '시험일' && 'testDate') ||
                (title === '고사장' && 'name')
              }
              value={
                (title === '시험일' && list.testDate) ||
                (title === '서울' && list.districtName) ||
                (title === '고사장' && list.name)
              }
            />
            <S.ListLabel
              htmlFor={
                (title === '시험일' && list.testDate) ||
                (title === '서울' && list.districtName) ||
                (title === '고사장' && list.id)
              }
              isSeoul={title === '서울'}
            >
              {(title === '시험일' && changeDate(testDate)) ||
                (title === '서울' && list.districtName) ||
                (title === '고사장' && list.name)}
            </S.ListLabel>
          </S.InfoList>
        );
      })}
    </S.InfoListContainer>
  );
}
