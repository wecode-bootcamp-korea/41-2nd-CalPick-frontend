import styled from 'styled-components';

const S = {
  Top: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  LogoTop: styled.img`
    width: 200px;
    height: 150px;
  `,
  DivContainer: styled.div`
    margin-top: 20px;
  `,
  Password: styled.div`
    margin-top: 20px;
  `,
  PasswordCheck: styled.div`
    margin-top: 25px;
  `,
  Name: styled.div`
    margin-bottom: 20px;
  `,
  PhoneNumber: styled.div``,
  InputSixth: styled.input`
    border: 1px solid rgb(214, 222, 235);
  `,
  FirstAgree: styled.span`
    width: 300px;
    height: 50px;
    color: #738096;
    margin-left: 10px;
  `,
  LabelFirst: styled.label`
    display: block;
    padding: 10px;
    border-bottom: 1px solid #d6deeb;
  `,
  BottomFirst: styled.div`
    border: 1px solid;
    border-radius: 4px;
    background: white;
    margin-bottom: 10px;
    border-color: #d6deeb;
    width: 300px;
  `,

  ErrorMessage: styled.span`
    margin-top: 8px;
    color: #ef0000;
    font-size: 13px;
  `,
  Example: styled.span`
    color: blue;
    margin-bottom: 10px;
  `,
  FirstTable: styled.table`
    border: 1px solid rgb(214, 222, 235);
    border-radius: 4px;
    background: white;
    margin-top: 25px;
    margin-bottom: 10px;
    width: 300px;
    height: 50px;
  `,
  PasswordFirst: styled.span`
    margin-top: 8px;
    color: #ef0000;
    font-size: 13px;
  `,
  TheadFirst: styled.thead`
    border-bottom: 1px solid rgb(214, 222, 235);
    padding: 13px 15px;
    font-weight: 700;
  `,
  InputLast: styled.input`
    margin-bottom: 10px;
    margin-top: 10px;
  `,
  ThAgree: styled.th`
    padding: 13px;
  `,
  LastDiv: styled.div`
    margin-top: 10px;
    margin-bottom: 30px;
  `,
};

export default S;
