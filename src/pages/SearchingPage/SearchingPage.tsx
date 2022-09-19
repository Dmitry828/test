import { Wrapper } from './styled';
import { useSelector } from 'react-redux';
import { getIsLoadingSearch, getSearchMovie } from '../../modules/search/selectors';
import { Movies } from '../../components/Main/components/Movies/Movies';
import { Loader } from '../../components/Loader/Loader';

export const SearchingPage = () => {
  const searchMovies = useSelector(getSearchMovie) || {};
  const isLoading = useSelector(getIsLoadingSearch);

  if (!isLoading) {
    return (
      <Wrapper>
        <Movies movies={searchMovies} />
      </Wrapper>
    );

  }

  return (
    <Loader />
  );

};