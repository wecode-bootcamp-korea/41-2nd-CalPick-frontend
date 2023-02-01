import React, { useState, useEffect } from 'react';
import ImgCarousel from './Components/ImgCarousel';
import Card from './Components/Card';
import * as S from './Main.styles';

export default function Main() {
  const [testData, setTestData] = useState([]);
  const [imgCount, setImgCount] = useState(0);
  const url = 'http://10.58.52.199:3000/tests';

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setTestData(data));
  }, []);

  function chunk(data, size = 1) {
    const arr = [[]];
    for (let i = 0; i < data.length; i += size) {
      arr[0].push(data.slice(i, i + size));
    }
    return arr;
  }

  const sliceArr = chunk(testData, 5);

  const sliceArray = sliceArr.map(item => item);

  useEffect(() => {
    const timer = setInterval(() => {
      imgCount >= EVENTIMGLIST.length - 1
        ? setImgCount(0)
        : setImgCount(prev => prev + 1);
    }, 3000);
    return () => clearInterval(timer);
  }, [imgCount]);

  return (
    <S.MainContainer>
      <S.EventCarousel className="inner">
        <S.EventContainer
          style={{ transform: `translateX(${imgCount * -1130}px)` }}
        >
          <S.EventImg>
            {EVENTIMGLIST.map(({ id, src, alt }) => (
              <ImgCarousel key={id} src={src} alt={alt} />
            ))}
          </S.EventImg>
        </S.EventContainer>
      </S.EventCarousel>
      <S.CardContainer>
        {sliceArray &&
          sliceArray.map(item => item.map(data => <Card testData={data} />))}
      </S.CardContainer>
    </S.MainContainer>
  );
}

const EVENTIMGLIST = [
  { id: 1, src: './images/eventimg1.png', alt: '이벤트 이미지' },
  { id: 2, src: './images/eventimg2.png', alt: '이벤트 이미지' },
  { id: 3, src: './images/eventimg3.png', alt: '이벤트 이미지' },
];
