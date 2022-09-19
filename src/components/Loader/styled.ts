import styled from 'styled-components';


export const WrapperLoader = styled.div`
  svg{
    width: 50px;
    animation-name: loader;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
  @keyframes loader {
    0%{
      transform: rotate(0turn);
    }
    100%{
      transform: rotate(1turn);
    }
  }
`;