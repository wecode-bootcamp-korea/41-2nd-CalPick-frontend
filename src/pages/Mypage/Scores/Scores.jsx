import React from 'react';
import * as S from './Scores.styles';

export default function Scores() {
  return (
    <S.ScoresContainer>
      <S.ScoreHeader>성적확인</S.ScoreHeader>
      <S.ScoreWrap>
        <S.ScoreTableHead>
          <tr>
            {TEST_TITLE.map(({ id, title }) => (
              <React.Fragment key={id}>
                <th>{title}</th>
              </React.Fragment>
            ))}
          </tr>
        </S.ScoreTableHead>
        <S.ScoreTableBody>
          {TEST_SCORE.map(({ id, title, testDate, userId, score, more }) => (
            <tr key={id}>
              <td>{title}</td>
              <td>{testDate}</td>
              <td>{userId}</td>
              <td>{score}</td>
              <td>{more}</td>
            </tr>
          ))}
        </S.ScoreTableBody>
      </S.ScoreWrap>
    </S.ScoresContainer>
  );
}

const TEST_TITLE = [
  { id: 1, title: '시험' },
  { id: 2, title: '시험일' },
  { id: 3, title: '수험번호' },
  { id: 4, title: '성적' },
  { id: 5, title: '성적표발급' },
];

const TEST_SCORE = [
  {
    id: 1,
    title: 'CalPick',
    testDate: '2023-01-07',
    userId: 12345,
    score: 300,
    more: <button>자세히 보기</button>,
  },
  {
    id: 2,
    title: 'CalPicks',
    testDate: '2023-01-15',
    userId: 26346,
    score: 700,
    more: <button>자세히 보기</button>,
  },
  {
    id: 3,
    title: 'OCalPick',
    testDate: '2023-01-29',
    userId: 97623,
    score: 990,
    more: <button>자세히 보기</button>,
  },
  {
    id: 4,
    title: 'CalPickSpeaking',
    testDate: '2023-02-04',
    userId: 45885,
    score: 850,
    more: <button>자세히 보기</button>,
  },
];
