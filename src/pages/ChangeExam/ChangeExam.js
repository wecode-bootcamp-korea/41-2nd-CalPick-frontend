import React from 'react';
import * as S from './ChangeExam.styles';
import RegisterTable from './Components/RegisterTable/RegisterTable';

export default function ChangeExam() {
  return (
    <S.ChangeExamContainer className="inner">
      <S.Title>접수 확인 / 변경 / 취소</S.Title>
      <RegisterTable></RegisterTable>
    </S.ChangeExamContainer>
  );
}
