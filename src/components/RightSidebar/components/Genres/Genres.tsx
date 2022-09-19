import { Genre, Wrapper } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { REQUEST_GENRES } from '../../../../modules/movies/actions';
import { getMovieGenres } from '../../../../modules/movies/selectors';
import { genresToUpperCase } from '../../../../utils/genresUtil';


export const Genres = () => {
  const dispatch = useDispatch();
  const { genres } = useSelector(getMovieGenres) || {};
  useEffect(() => {
    dispatch(REQUEST_GENRES(1));
  }, [dispatch]);

  return (
    <Wrapper>
      {
        genres?.map((genre) => {
          return (
            <Genre key={genre.id}>{genresToUpperCase(genre.name)}</Genre>
          );
        })
      }
    </Wrapper>
  );
};
