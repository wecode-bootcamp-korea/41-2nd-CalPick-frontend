import styled from 'styled-components';

const S = {
  Top: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
  `,
  LogoTop: styled.img`
    width: 200px;
    height: 100px;
    border-radius: 8px;
    margin-top: 20px;
  `,
  IdFirst: styled.div`
    margin-top: 20px;
  `,
  Password: styled.div`
    margin-top: 20px;
  `,
  Login: styled.div`
    display: flex;
    flex-direction: column;
  `,
  LoginFirst: styled.div`
    margin-top: 20px;
    margin-bottom: 30px;
  `,
  Button: styled.button`
    width: 300px;
    height: 50px;
    color: black;
    background-color: #b2ddef;
    border: 1px solid rgb(214, 222, 235);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    justify-content: center;

    &:disabled {
      background-color: white;
    }
  `,

  Error: styled.div`
    margin-top: 8px;
    color: #ef0000;
    font-size: 12px;
  `,
};

export default S;
