import { Wrapper } from './styled';
import { useSelector } from 'react-redux';
import { favoritesMovies } from '../../modules/favorites/selectors';
import { MovieArray } from '../../core/store/sagas/types';
import { MovieDetails } from '../../modules/movie/types';
import { FC } from 'react';

interface props {
  isLoading?:boolean
}

export const FavoritesPage:FC<props> = ({isLoading}) => {
  const favorites = useSelector(favoritesMovies);
  return (
    <Wrapper>
      {favorites && favorites.map((el: MovieDetails) => {

        return (<div key={el.id}>{el.title}</div>);

      })}
      <div>{isLoading}</div>
    </Wrapper>
  );
};