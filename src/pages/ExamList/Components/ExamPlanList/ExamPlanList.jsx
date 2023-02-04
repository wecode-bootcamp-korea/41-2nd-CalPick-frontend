import React from 'react';
import Button from '../../../../components/Button';
import * as S from './ExamPlanList.styles';
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function ExamPlanList({ info, examName }) {
  const [searchParams, SetSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const clickHandler = () => {
    searchParams.set('examName', examName);
    searchParams.set('testDate', info.testDate);
    SetSearchParams(searchParams);
    navigate('/examInfo');
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
