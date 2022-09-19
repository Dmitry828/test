import { Wrapper } from './styled';
import { Movies } from '../../components/Main/components/Movies/Movies';
import { useDispatch, useSelector } from 'react-redux';
import { latestMovies } from '../../modules/movies/selectors';
import { useEffect, useState } from 'react';
import { REQUEST_DISCVOER } from '../../modules/movie/actions';
import { getDiscoveredMovies } from '../../modules/search/selectors';

export const HomePage = () => {
  const [page, setPage] = useState<number>(1);
  const handlePrevPage = () => {
    page > 1 && setPage(prevState => prevState - 1);
  };
  const handleNextPage = () => {
    setPage(prevState => prevState + 1);
  };


  console.log('home')
  const discoverMovies = useSelector(getDiscoveredMovies) || {};
  console.log(discoverMovies.results);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(REQUEST_DISCVOER( 'popularity.desc', page ));
  }, [dispatch, page]);
  console.log(page);
  return (
    <Wrapper>
      <Movies movies={discoverMovies} />
      <div onClick={handlePrevPage}>Предыдущая страница</div>
      <div onClick={handleNextPage}>Следующая страница</div>
    </Wrapper>
  );
};