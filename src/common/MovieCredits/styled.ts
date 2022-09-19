import styled from 'styled-components';

export const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin: 30px 0 30px 2%;
`;

export const Wrapper = styled.div`
  text-align: center;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-left: 2%;
  margin-right: 2%;
`;
export const ActorWrapper = styled.div`
  max-width: 138px;
  background-color: #a59898;
  border-radius: 10px;
  margin-top: 10px;
  min-height: 240px;
  & + & {
    margin-left: 5px;
  }
`;
export const ActorPhoto = styled.img`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
export const ActorName = styled.div`
  font-size: 18px;
  font-weight: 500;
`;
export const ActorCharacter = styled.div`
  font-size: 14px;
`;