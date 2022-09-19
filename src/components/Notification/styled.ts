import styled from 'styled-components';


export const Wrapper = styled.div`
  position: fixed;
  margin-right: 1%;
  top: 0;
  right: 0;
  color: #fff;
  
  .notification {
    padding: 1px 17px 23px 19px;
    margin-top: 15px;
    border-radius: 10px;
    width: auto;
  }

  .notification-success {
    background-color: rgb(56, 161, 105);
  }

  .notification-error {
    background-color: rgb(229, 62, 62);
  }
`;
