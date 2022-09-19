import styled from 'styled-components';

interface Props{
  isFavorite?:boolean
}

export const Wrapper = styled.div`
  margin-top: 50px;
  font-size: 17px;
  width: 66%;
`;
export const InfoWrapper = styled.div`
  border-bottom: 2px solid #e2e2e2;
  display: flex;
  width: 79%;
  justify-content: space-between;
  margin-bottom: 100px;
  margin-left: 3%;
`;
export const MovieTitle = styled.div`
  font-size: 30px;
  font-weight: 500;
`;
export const D = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 20px;
`;
export const MoviePoster = styled.div`

  img {
    width: 200px;
  }
`;
export const MovieInfo = styled.div`
  color: #212121;
  padding-top: 10px;
  padding-bottom: 10px;

`;
export const MainInfo = styled.div`

`;
export const Rating = styled.div`
  background-color: rgb(218, 255, 240);
  color: green;
  border: 1px solid rgb(92, 194, 157);
  border-radius: 7px;
  text-align: center;
  padding: 7px 25px;
  height: 64px;
  font-size: 15px;

  span {
    font-weight: 700;
    font-size: 21px;
    color: rgb(5, 106, 83);
  }
`;
export const FavoriteWrapper = styled.div<Props>`

  padding-bottom: 12px;
  color: #fc2f2f;
  cursor: pointer;

  svg {
    width: 17px;
    margin-right: 7px;
    fill: #fc2f2f;
    
  }
`;
export const Favorite = styled.div`
  display: flex;
`;

export const TrailerButton = styled.button`
  padding: 12px 16px 14px;
  background-color: #fc2f2f;
  color: #fff;
  border: none;
  border-radius: 3px;
  font-size: 15px;
  font-weight: 400;
  cursor: pointer;
  display: flex;

  svg {
    width: 15px;
    margin-left: 13px;
    padding-top: 2px;
    fill: #fff;
  }
`;

export const OverviewWrapper = styled.div`
  margin-top: 30px;
  margin-left: 2%;
`;
export const TitleOverview = styled.div`
  font-size: 20px;
  font-weight: 500;
`;
export const OverviewText = styled.div``;