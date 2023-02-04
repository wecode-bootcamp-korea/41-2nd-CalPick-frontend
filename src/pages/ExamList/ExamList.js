import React from 'react';
import ExamPlan from './Components/ExamPlan/ExamPlan';
import * as S from './ExamList.styles';

export default function ExamList() {
  return (
    <S.ExamListContainer className="inner">
      <ExamPlan />
      <S.Logo src="images/logo.png" />
    </S.ExamListContainer>
  );
}
