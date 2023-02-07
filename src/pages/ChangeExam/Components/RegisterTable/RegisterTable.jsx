import React, { useEffect } from 'react';
import * as S from './RegisterTable.styles';
import RegisterTableList from './RegisterTableList/RegisterTableList';

export default function RegisterTable() {
  return (
    <S.TableContainer>
      <S.ListItemContainer>
        {TITLE_LIST.map(list => {
          return (
            <S.ListItemTitle className="title">{list.title}</S.ListItemTitle>
          );
        })}
        <RegisterTableList></RegisterTableList>
      </S.ListItemContainer>
    </S.TableContainer>
  );
}

const TITLE_LIST = [
  {
    id: 1,
    title: '시험',
  },
  {
    id: 2,
    title: '시험일',
  },
  {
    id: 3,
    title: '시간',
  },
  {
    id: 4,
    title: '고사장',
  },
  {
    id: 5,
    title: '자세히보기',
  },
];
