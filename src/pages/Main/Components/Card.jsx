import React, { useState } from 'react';
import TestCard from './TestCard';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import * as S from './Card.styles';

export default function Card({ testData }) {
  const testType = testData[testData.length - 1].testName;
  const [move, setMove] = useState(0);

  const cardWidth = 278;

  const moveRight = () => {
    if (move >= -(testData.length * cardWidth) + cardWidth * 1) {
      setMove(move - cardWidth * 1);
    }
  };

  const moveLeft = () => {
    if (move <= -cardWidth) {
      setMove(move + cardWidth * 1);
    }
  };

  return (
    <S.CardsContainer>
      <S.CardsLayout className="inner">
        <S.CardsBtnDiv props={testData.length < 3}>
          <S.CardsCarouselBtn left={'340px'} onClick={moveLeft}>
            <MdOutlineKeyboardArrowLeft size={'50px'} />
          </S.CardsCarouselBtn>

          <S.CardsCarouselBtn
            right={'350px'}
            onClick={move !== -278 && moveRight}
          >
            <MdOutlineKeyboardArrowRight size={'50px'} />
          </S.CardsCarouselBtn>
        </S.CardsBtnDiv>

        <S.MainTitle>
          <S.TestTitle>{`${testType} 시험일정 안내`}</S.TestTitle>
          {testData[0].testName === '캘픽' && (
            <S.AllTestLink>전체일정보기</S.AllTestLink>
          )}
        </S.MainTitle>

        <S.CardsList style={{ transform: `translate(${move}px)` }}>
          <S.CardsDiv>
            {testData.map(
              ({
                province_id,
                testDate,
                testName,
                releaseDate,
                registerDate,
              }) => (
                <TestCard
                  key={province_id}
                  testName={testName}
                  testDate={testDate}
                  releaseDate={releaseDate}
                  registerDate={registerDate}
                />
              )
            )}
          </S.CardsDiv>
        </S.CardsList>
      </S.CardsLayout>
    </S.CardsContainer>
  );
}
