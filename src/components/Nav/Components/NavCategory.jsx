import React from 'react';
import * as S from './NavCategory.styles';
import NavCategoriesIcon from './NavCategoriesIcon';
import { IoMdInformationCircleOutline } from 'react-icons/io';
import { SlCalender } from 'react-icons/sl';
import { ImMap2 } from 'react-icons/im';
import { CgList } from 'react-icons/cg';

export default function NavCategory() {
  return (
    <S.Category className="inner">
      <div>
        <S.LogoImg src="/images/logo.png" alt="캘픽 메인 로고" />
      </div>

      <S.NavCategoryContainer>
        {CATEGORY_ICON.map(({ icon, text, className }, idx) => (
          <NavCategoriesIcon
            className={className}
            key={idx}
            icon={icon}
            text={text}
          />
        ))}
      </S.NavCategoryContainer>
    </S.Category>
  );
}

const CATEGORY_ICON = [
  { icon: <IoMdInformationCircleOutline size="24px" />, text: '고사장 안내' },
  { icon: <SlCalender size="24px" />, text: '캘린더' },
  { icon: <ImMap2 size="24px" />, text: '오시는 길' },
  {
    icon: <CgList size="24px" />,
    text: '나의 시험 일정',
  },
];
