import { Wrapper } from './styled';
import { useDispatch } from 'react-redux';
import { FC } from 'react';
import { MovieArray } from '../../../../core/store/sagas/types';
import { Movie } from './components/Movie/Movie';

interface Props {
  movies: any,
}

export const Movies: FC<Props> = ({ movies }) => {
  const moviesResults = movies?.results;


  return (
    <Wrapper>
      {moviesResults && moviesResults.map((movie: MovieArray) => {
        return (
          <Movie movie={movie} key={movie.id} />
        );
      })
      }
    </Wrapper>
  );
};