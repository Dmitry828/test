import React from 'react';
import { MoviePoster, MovieTitle, Wrapper } from './styled';
import { MovieArray } from '../../../../../../core/store/sagas/types';
import routeNames from '../../../../../../core/routers/routeNames';
import { Link } from 'react-router-dom';

interface Props {
  movie: MovieArray;
}

export const Movie: React.FC<Props> = ({ movie }) => {
  return (
    <Wrapper>
      <Link to={`/${routeNames.movie}/${movie.id}/${movie.title}`}>
        <MoviePoster>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt='' />
        </MoviePoster>
        <MovieTitle>{movie.title}</MovieTitle>
      </Link>
    </Wrapper>
  );
};