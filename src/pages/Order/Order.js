import React from 'react';
import { FcCheckmark, FcCancel } from 'react-icons/fc';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Button from '../../components/Button';
import * as S from './Order.styles';

export default function Order() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const goToMain = () => navigate('/');
  const payment = searchParams.get('payment');

  return (
    <S.OrderContainer className="inner">
      <S.BubbleContainer>
        <S.OrderBubble>
          {(!payment && '접수가 완료되었습니다.') ||
            (payment === 'user_cancel' && '결제창이 닫혔습니다.') ||
            (payment === 'invaild_card' && '유효하지 않은 카드입니다.')}
        </S.OrderBubble>
      </S.BubbleContainer>
      <S.OrderIcons>
        {payment ? <FcCancel size="48px" /> : <FcCheckmark size="48px" />}
      </S.OrderIcons>
      <S.OrderMessage>
        캘픽 시험문제는 CalPick 고유 창작물로서 저작권 법에 의해 보호받는
        저작물이며
        <br /> 해당 저작물과 관련된 모든 권리는 저작권자인 CalPick에 귀속됩니다.
      </S.OrderMessage>
      <Button size="medium" color="primary" onClick={goToMain}>
        메인 페이지
      </Button>
    </S.OrderContainer>
  );
}
