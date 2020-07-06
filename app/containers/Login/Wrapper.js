import styled from 'styled-components';
export const LoginWrapper = styled.div`
  background-color: #ffffff;
  width: 460px;
  margin: 50px auto 10px auto;
  padding: 30px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px -3px #333;
  text-align: center;
  height: 432px;
  .login-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    img {
      max-width: 100px;
      margin: 40px auto;
    }
    button {
      display: inline-flex;
      width: 100%;
      border-radius: 2px;
      border: 1px solid #979797 !important;
      background-color: #ffffff;
      box-shadow: none !important;
      justify-content: center;
      padding: 20px 67px 15px 67px;
      span {
        font-family: Roboto;
        font-size: 16px;
        font-weight: 500;
        text-align: center;
        color: #757575;
        letter-spacing: 0.4px;
      }
    }
  }
`;
