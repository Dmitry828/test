import styled from 'styled-components';


export const Wrapper = styled.div`
  margin-top: 50px;
  padding-left: 2%;
  padding-right: 2%;
  position: relative;
  .slick-list{
    overflow: hidden
  }
  .slick-track {
    display: flex;
    justify-content: space-between;
  }
`;
export const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 30px;
`;
export const Movie = styled.div`
  width: 80% ;
  height: 80%;
`;
export const MoviePoster = styled.img`
  width: 100%;
  height: 100%;
  
`;
export const MovieTitle = styled.div``;

export const PrevButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 43%;
  left: 2%;
  z-index: 1;
  border: none;
  padding: 1% 0.5%;
  background-color: rgba(0, 0, 0, 0.5);
  svg{
    fill:#fc2f2f;
    transform: rotate(180deg);
    
  }
`;
export const NextButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 43%;
  right: 5.7%;
  z-index: 1;
  border: none;
  padding: 1% 0.5%;
  background-color: rgba(0, 0, 0, 0.5);

  svg {
    fill: #fc2f2f;
    width: 100%;
  }
`;
