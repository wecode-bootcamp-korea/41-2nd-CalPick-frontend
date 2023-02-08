import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavCategoriesIcon from './NavCategoriesIcon';
import { IoMdInformationCircleOutline } from 'react-icons/io';
import { SlCalender } from 'react-icons/sl';
import { RiListCheck } from 'react-icons/ri';
import { CgList } from 'react-icons/cg';
import * as S from './NavCategory.styles';

export default function NavCategory() {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem('accessToken');

  const goToMain = e => {
    navigate('/');
  };

  const CATEGORY_ICON = [
    {
      icon: <IoMdInformationCircleOutline size="24px" />,
      text: '고사장 안내',
      router: '/examinfo',
    },
    { icon: <SlCalender size="24px" />, text: '캘린더', router: '/calendar' },
    {
      icon: <RiListCheck size="24px" />,
      text: '전체 시험 일정',
      router: '/examlist',
    },
    {
      icon: <CgList size="24px" />,
      text: '마이 페이지',
      router: '/mypage',
    },
  ];
  return (
    <S.Category className="inner">
      <div onClick={goToMain}>
        <S.LogoImg src="/images/logo.png" alt="캘픽 메인 로고" />
      </div>

      <S.NavCategoryContainer>
        {CATEGORY_ICON.map(({ icon, text, className, router }, idx) => (
          <NavCategoriesIcon
            className={className}
            key={idx}
            icon={icon}
            text={text}
            router={router}
            accessToken={accessToken}
          />
        ))}
      </S.NavCategoryContainer>
    </S.Category>
  );
}
