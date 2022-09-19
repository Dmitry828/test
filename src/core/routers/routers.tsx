import { Route, Routes } from 'react-router-dom';


import Layout  from '../../screens/App/components/Layout/Layout';
import routeNames from './routeNames';
import { MoviePage } from '../../pages/MoviePage/MoviePage';
import { FavoritesPage } from '../../pages/FavoritesPage/FavoritesPage';
import { CommunityPage } from '../../pages/CommunityPage/CommunityPage';
import { HomePage } from '../../pages/HomePage/HomePage';
import { SearchingPage } from '../../pages/SearchingPage/SearchingPage';

export const Routers = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={`/${routeNames.community}`} element={<CommunityPage />} />
          <Route path={`/${routeNames.favorites}`} element={<FavoritesPage />} />
          <Route path={`/${routeNames.searching}`} element={<SearchingPage />} />
          <Route path={`/${routeNames.movie}/:currId/:title`} element={<MoviePage />} />
          <Route path='*' element={<div>fail</div>} />
        </Route>
      </Routes>
    </>
  );
};