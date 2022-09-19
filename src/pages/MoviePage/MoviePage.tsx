import {
  D,
  Favorite,
  FavoriteWrapper,
  InfoWrapper,
  MainInfo,
  MovieInfo,
  MoviePoster,
  MovieTitle,
  OverviewText,
  OverviewWrapper,
  Rating,
  TitleOverview,
  TrailerButton,
  Wrapper,
} from './styled';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { REQUEST_MOVIE } from '../../modules/movie/actions';
import { getMovieDetails, getMovieLoading } from '../../modules/movie/selectors';
import { formatDate, getYear } from '../../utils/dateUtils';
import { formatRuntime } from '../../utils/runtimeUtil';
import { showFirstThreeGenres } from '../../utils/genresUtil';
import { ReactComponent as StarIcon } from '../../assets/images/star.svg';
import { ReactComponent as PlayIcon } from '../../assets/images/play-button.svg';
import { Loader } from '../../components/Loader/Loader';
import { addToFavorites, deleteFromFavorites } from '../../modules/favorites/reducer';
import { favoritesMovies } from '../../modules/favorites/selectors';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { Notification } from '../../components/Notification/Notification';
import { MovieCredits } from '../../common/MovieCredits/MovieCredits';
import { SimilarMovies } from './components/SimilarMovies';


export const MoviePage = () => {

  const { currId }: any = useParams();
  const dispatch = useDispatch();
  const { data } = useSelector(getMovieDetails) || {};
  const {
    title,
    poster_path,
    genres,
    release_date,
    runtime,
    overview,
    id,
    vote_average,
    production_countries,
  } = data || {};

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  useEffect(() => {
    let mounted = true;
    if(mounted) {
      console.log('mount')
      dispatch(REQUEST_MOVIE(506536));
    }
    return () => {
      console.log('unmount');
      mounted = false;
    }
  }, [ currId]);
  const isLoading = useSelector(getMovieLoading);
  const handleAddToFavorites = () => {
    if (!isFavorite) {
      dispatch(addToFavorites(data));
    } else {
      dispatch(deleteFromFavorites(data));
    }
  };
  const favorites = useSelector(favoritesMovies);
  const isFavorite = favorites && favorites.findIndex(obj => obj.id === id) !== -1;
  const createNotification = (type: string) => {
    return () => {
      switch (type) {
      case 'success':
        NotificationManager.success(`${title} добавлен в избранное`, 'Добавлено', 3000, null, true);
        break;
      case 'error':
        NotificationManager.error(`${title} удален из избранного`, 'Удалено', 3000, null, true);
        break;
      }
    };
  };
  console.log('render');
  if (!isLoading) {
    return (
      <Wrapper>
        <D>
          <MoviePoster>
            <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt='' />
          </MoviePoster>

          <InfoWrapper>
            <MainInfo>
              <MovieTitle>{title} ({getYear(release_date)})</MovieTitle>
              <MovieInfo>
                <span>{formatRuntime(runtime)} | </span>
                <span>{showFirstThreeGenres(genres)} | </span>
                <span>{formatDate(release_date)} ({production_countries && production_countries[0]?.iso_3166_1})</span>
              </MovieInfo>

              <FavoriteWrapper isFavorite={isFavorite}
                               onClick={isFavorite ? createNotification('error') : createNotification('success')}>
                <Favorite onClick={handleAddToFavorites}>
                  <StarIcon />
                  <div>{isFavorite ? 'Удалить из избранного' : 'Добавить в избранное'}</div>
                </Favorite>
              </FavoriteWrapper>

              <TrailerButton>Смотреть Трейлер <PlayIcon /> </TrailerButton>
            </MainInfo>
            <Rating>
              <span>{Math.floor(vote_average)}/10</span>
              <div>rating</div>
            </Rating>
          </InfoWrapper>
        </D>
        <Notification isFavorite={isFavorite}>
          <NotificationContainer />
        </Notification>
        <OverviewWrapper>
          <TitleOverview>Описание</TitleOverview>
          <OverviewText>{overview}</OverviewText>
        </OverviewWrapper>
        <MovieCredits />
        <SimilarMovies />
      </Wrapper>

    );
  }
  return (
    <Loader />
  );
};
