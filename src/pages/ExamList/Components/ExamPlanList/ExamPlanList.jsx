import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../../components/Button';
import * as S from './ExamPlanList.styles';

export default function ExamPlanList({ info, examName }) {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(`/examInfo?examName=${examName}&testDate=${info.testDate}`);
  };

  const changeDate = date => {
    const testDate = date.split('-');
    return testDate[0] + '년 ' + testDate[1] + '월 ' + testDate[2] + '일';
  };

  return (
    <>
      <S.ListItem>{changeDate(info.registerDate)}</S.ListItem>
      <S.ListItem>{changeDate(info.registerDate)}</S.ListItem>
      <S.ListItem>{changeDate(info.releaseDate)}</S.ListItem>
      <S.ListItem>
        <Button size="medium" color="primary" onClick={clickHandler}>
          접수하기
        </Button>
      </S.ListItem>
    </>
  );
}
