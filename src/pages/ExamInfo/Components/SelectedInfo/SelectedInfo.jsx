import React from 'react';
import * as S from './SelectedInfo.styles';

export default function SelectedInfo({ selectedData }) {
  const changeDate = () => {
    const testDate = selectedData.testDate.split('-');
    return testDate[0] + '년 ' + testDate[1] + '월 ' + testDate[2] + '일';
  };

  const TITLE_LIST = [
    {
      id: 1,
      title: '날짜',
      content: changeDate(selectedData.testDate),
    },
    {
      id: 2,
      title: '서울',
      content: selectedData.districts,
    },
    {
      id: 3,
      title: '고사장',
      content: selectedData.name,
    },
  ];

  return (
    <S.SelectedInfoLayout>
      {TITLE_LIST.map(list => {
        return (
          <S.SelectedWrap key={list.id}>
            <S.SelectedTitle>{list.title}</S.SelectedTitle>
            <S.SelectedContent>{list.content}</S.SelectedContent>
          </S.SelectedWrap>
        );
      })}
    </S.SelectedInfoLayout>
  );
}
