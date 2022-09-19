import { useSelector } from 'react-redux';
import { getSimilarMovies } from '../../../modules/movie/selectors';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Slider from 'react-slick';
import { Movie, MoviePoster, MovieTitle, NextButton, PrevButton, Title, Wrapper } from './styled';
import routeNames from '../../../core/routers/routeNames';
import { Link } from 'react-router-dom';
import  { ReactComponent as ArrowIcon } from '../../../assets/images/arrow.svg';


export const SimilarMovies = () => {
  function SamplePrevArrow({onClick}:any) {
    return (
      <PrevButton onClick={onClick} >
        <ArrowIcon/>
      </PrevButton>
    );
  }
  function SampleNextArrow({onClick}:any) {
    return (
      <NextButton onClick={onClick} >
        <ArrowIcon/>
      </NextButton>
    );
  }
  const { results } = useSelector(getSimilarMovies) || {};
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <SampleNextArrow/>,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Wrapper>
      <Title>Похожие фильмы</Title>

      <Slider  {...settings} >
        {results?.map(movie => {
          return (
            <Link key={movie.id} to={`/${routeNames.movie}/${movie.id}/${movie.title}`}>
              <Movie >
                <MoviePoster src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                <MovieTitle>{movie.title}</MovieTitle>
              </Movie>
            </Link>
          );
        })}
      </Slider>
    </Wrapper>
  );
};