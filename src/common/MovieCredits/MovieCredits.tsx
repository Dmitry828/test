import { ActorCharacter, ActorName, ActorPhoto, ActorWrapper, Title, Wrapper } from './styled';
import { useSelector } from 'react-redux';
import { getMovieCredits } from '../../modules/movie/selectors';

export const MovieCredits = () => {
  const cast = useSelector(getMovieCredits);
  return (
    <>
      <Title>Актёры</Title>
      <Wrapper>
        {cast?.map(actor => {
          return (
            <ActorWrapper key={actor.id}>
              <ActorPhoto src={`https://image.tmdb.org/t/p/w138_and_h175_face${actor.profile_path}`} />
              <ActorName>{actor.name}</ActorName>
              <ActorCharacter>{actor.character}</ActorCharacter>
            </ActorWrapper>
          );
        })}
      </Wrapper>
    </>
  );
};