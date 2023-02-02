import React, { useEffect, useState } from 'react';

import ExamPlanList from '../ExamPlanList/ExamPlanList';
import * as S from './ExamPlan.styles';

export default function ExamPlan() {
  const [dateList, setDateList] = useState([]);
  const [examName, setExamName] = useState('캘픽');

  useEffect(() => {
    fetch(`http://10.58.52.241:3001/tests?testName=${examName}`)
      .then(response => response.json())
      .then(data => setDateList(data));
  }, [examName]);

  const changeHandler = e => {
    setExamName(e.target.value);
  };

  return (
    <>
      <S.ExamTitleContainer>
        {EXAM_LIST.map(title => {
          return (
            <S.ExamTitle>
              <S.ExamInput
                type="radio"
                name="examtitle"
                id={title.name}
                value={title.title}
                onChange={changeHandler}
              ></S.ExamInput>
              <S.ExamLabel htmlFor={title.name}>{title.title}</S.ExamLabel>
            </S.ExamTitle>
          );
        })}
      </S.ExamTitleContainer>
      <S.TableTitle>시험 접수</S.TableTitle>
      <S.TableContainer>
        <S.ListItemContainer>
          {TITLE_LIST.map(list => {
            return <S.ListItemTitle>{list.title}</S.ListItemTitle>;
          })}
        </S.ListItemContainer>
        {dateList.map(info => {
          return (
            <>
              <S.ListItemContainer>
                <ExamPlanList info={info} examName={examName}></ExamPlanList>
              </S.ListItemContainer>
            </>
          );
        })}
      </S.TableContainer>
    </>
  );
}

const TITLE_LIST = [
  {
    id: 1,
    title: '시험일',
  },
  {
    id: 2,
    title: '접수기간',
  },
  {
    id: 3,
    title: '성적발표일',
  },
  {
    id: 4,
    title: '시험접수',
  },
];

const EXAM_LIST = [
  {
    id: 1,
    title: '캘픽',
    name: '캘픽',
  },
  {
    id: 2,
    title: '캘픽스피킹',
    name: '캘픽스피킹',
  },
  {
    id: 3,
    title: '오캘픽',
    name: '오캘픽',
  },
  {
    id: 4,
    title: '캘픽스',
    name: '캘픽스',
  },
];
