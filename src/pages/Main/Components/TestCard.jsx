import React from 'react';
import { useNavigate } from 'react-router-dom';
import useDate from '../../../hooks/useDate';
import * as S from './TestCard.styles';

export default function TestCard({
  testName,
  testDate,
  releaseDate,
  registerDate,
}) {
  const [today, dotDay, week] = useDate(testDate);
  const [, testBeforeDotDay, BeforeWeek] = useDate(registerDate);
  const [, testAfterDotDay, AfterWeek] = useDate(releaseDate);
  const navigate = useNavigate();

  const goToExaminfo = () =>
    navigate(`/examinfo?"testName=${testName}"testDate=${today}"`);

  return (
    <S.CardDiv onClick={goToExaminfo}>
      <S.CardTitle>
        <S.TestState test>{testName}</S.TestState>
        <S.TestState blue>접수 가능</S.TestState>
      </S.CardTitle>
      <S.TestDay>
        {dotDay}
        <S.TestWeek>({week})</S.TestWeek>
      </S.TestDay>
      <S.TestDate>
        <S.TestDateList>
          접수마감 : {`${testBeforeDotDay} (${BeforeWeek})`}
        </S.TestDateList>
        <S.TestDateList>
          성적발표 : {`${testAfterDotDay} (${AfterWeek})`}
        </S.TestDateList>
      </S.TestDate>
    </S.CardDiv>
  );
}
