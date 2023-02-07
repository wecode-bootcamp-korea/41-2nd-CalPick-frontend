import React from 'react';
import useFetch from '../../../../../hooks/useFetch';
import * as S from './RegisterTableList.styles';
import Button from '../../../../../components/Button';

export default function RegisterTableList() {
  const [fetchData] = useFetch('/data/registerList.json');

  return (
    <>
      {fetchData.map(info => {
        const examDate = info.examDate.split('-');
        const date =
          examDate[0] + '년 ' + examDate[1] + '월 ' + examDate[2] + '일';

        return (
          <>
            <S.ListItemsContainer>
              <S.ListItem>{info.examName}</S.ListItem>
              <S.ListItem>{date}</S.ListItem>
              <S.ListItem>{info.examTime}</S.ListItem>
              <S.ListItem>{info.testSite}</S.ListItem>
              <S.ListItem>
                <Button color="primary">{info.buttonName}</Button>
              </S.ListItem>
            </S.ListItemsContainer>
          </>
        );
      })}
    </>
  );
}
