import React from 'react';
import * as S from './ImgCarousel.styles';

export default function ImgCarousel({ src, alt }) {
  return <S.ImgWidth src={src} alt={alt} />;
}
