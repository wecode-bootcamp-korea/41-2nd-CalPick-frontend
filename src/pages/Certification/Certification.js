import React, { useEffect, useRef, useState } from 'react';
import Pdf from 'react-to-pdf';
import Button from '../../components/Button';
import * as S from './Certification.styles';

export default function Certification() {
  const [certifi, setCertifi] = useState([]);
  const ref = useRef();

  useEffect(() => {
    fetch('./data/certification.json')
      .then(res => res.json())
      .then(data => setCertifi(data));
  }, []);

  return (
    <S.PageContainer>
      <S.CertificationContainer ref={ref}>
        <S.CertificationHeader>
          <S.CalpickLogo src="./images/logo.png" alt="캘픽로고" />
          <S.CertificationTitle>
            OFFICIAL SCORE CERTIFICATION
          </S.CertificationTitle>
        </S.CertificationHeader>
        <S.CertificationBody>
          <S.CertificationInfo>
            {certifi.map(({ id, title, data }) => (
              <S.InfoCard key={id}>
                <S.InfoTitle>{title}</S.InfoTitle>
                <S.InfoContents>{data}</S.InfoContents>
              </S.InfoCard>
            ))}
          </S.CertificationInfo>
          <S.CertificationScore>
            <S.ScoreTilte>SCORE</S.ScoreTilte>
            <S.Score>900</S.Score>
          </S.CertificationScore>
          <S.ScoreVerify src="./images/verify.png" />
        </S.CertificationBody>
      </S.CertificationContainer>
      <Pdf targetRef={ref} filename="하평안_캘픽자격증.pdf">
        {({ toPdf }) => (
          <Button size="medium" color="primary" onClick={toPdf}>
            pdf파일저장 & 출력하기
          </Button>
        )}
      </Pdf>
    </S.PageContainer>
  );
}
