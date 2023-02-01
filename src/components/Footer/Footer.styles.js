import styled from 'styled-components';

const S = {
  Top: styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 67px;
    padding: 30px;
    border-top: 2px solid ${props => props.theme.colors.control};
    -ms-flex-direction: column;
  `,
  TopFirst: styled.div`
    display: flex;
    position: relative;
    flex-direction: row;
  `,
  UlFirst: styled.ul`
    display: flex;
    flex-direction: column;
    width: 185px;
  `,
  LiFirst: styled.li`
    display: inline-flex;
    align-items: center;
    margin: 10px 0;
    font-weight: bold;
    font-size: 13px;
    line-height: 16px;
    letter-spacing: -0.01em;
    color: #787878;
  `,
  Center: styled.img`
    width: 30px;
    height: 30px;
  `,
  LiSecond: styled.li`
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    margin: 10px 0;
    font-weight: bold;
    font-size: 13px;
    line-height: 16px;
    letter-spacing: -0.01em;
    color: #787878;
  `,
  Megaphone: styled.img`
    width: 30px;
    height: 30px;
  `,
  Second: styled.div`
    display: flex;
  `,
  Service: styled.div`
    display: flex;
    flex-direction: column;
  `,
  UlSecond: styled.ul`
    display: flex;
    flex-direction: column;
  `,
  LiThird: styled.li`
    color: #787878;
    font-size: 13px;
    line-height: 16px;
    letter-spacing: -0.01em;
    padding: 6px 0;
    margin-top: 10px;
  `,
  MapFirst: styled.p`
    margin-bottom: 10px;
  `,
  Fi: styled.li`
    display: flex;
  `,
  FiFirst: styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 100px;
    margin-right: 100px;
  `,
  UlThird: styled.ul`
    display: flex;
    flex-direction: column;
  `,
  LiEight: styled.li`
    color: #787878;
    font-size: 13px;
    line-height: 16px;
    letter-spacing: -0.01em;
    padding: 6px 0;
    margin-top: 10px;
  `,
  MapSecond: styled.p`
    margin-bottom: 10px;
  `,
  FiSecond: styled.li`
    display: flex;
    flex-direction: column;
  `,
  UlFourth: styled.ul`
    display: flex;
    flex-direction: column;
  `,
  LiTenth: styled.li`
    color: #787878;
    font-size: 13px;
    line-height: 16px;
    letter-spacing: -0.01em;
    padding: 6px 0;
    margin-top: 10px;
  `,
  MapThird: styled.p`
    margin-bottom: 10px;
  `,
  App: styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
    position: absolute;
    right: 1vw;
  `,
  Bottom: styled.div`
    margin-top: 60px;
    margin-bottom: 20px;
  `,
  SpanFirst: styled.span`
    font-size: 12px;
  `,
  Arrow: styled.img`
    width: 10px;
    height: 10px;
    margin-left: 10px;
  `,
  UlFifth: styled.ul`
    display: flex;
    align-items: center;
    margin-top: 10px;
  `,
  LiTwelfth: styled.li`
    color: #787878;
    font-size: 11px;
    display: inline-flex;
    height: 13px;
    line-height: 13px;
    letter-spacing: -0.01em;
  `,
  LiThirteenth: styled.li`
    color: #787878;
    font-size: 11px;
    display: inline-flex;
    height: 13px;
    line-height: 13px;
    letter-spacing: -0.01em;
    margin-left: 10px;
    margin-right: 10px;
    font-weight: bold;
  `,
  LiFourteenth: styled.li`
    color: #787878;
    font-size: 11px;
    display: inline-flex;
    height: 13px;
    line-height: 13px;
    letter-spacing: -0.01em;
    margin-right: 10px;
  `,
  LiFifteenth: styled.li`
    color: #787878;
    font-size: 11px;
    display: inline-flex;
    height: 13px;
    line-height: 13px;
    letter-spacing: -0.01em;
  `,
  SpanSecond: styled.span`
    font-size: 10px;
  `,
};

export default S;
