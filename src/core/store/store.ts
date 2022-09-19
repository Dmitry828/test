import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { moviesReducer } from '../../modules/movies/reducer';
import { rootSaga } from './sagas';
import { movieReducer } from '../../modules/movie/reducer';
import { favoritesReducer } from '../../modules/favorites/reducer';
import { searchReducer } from '../../modules/search/reducer';
import { booksReducer } from '../../modules/auth/reducer';



const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const rootReducer = combineReducers({
  moviesReducer,
  movieReducer,
  favoritesReducer,
  searchReducer,
  booksReducer,
});


// const preloadedState = localStorage.getItem('reduxState')
//   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//   // @ts-ignore
//   ? JSON.parse(localStorage.getItem('reduxState'))
//   : {};

export const store = configureStore({
  reducer: rootReducer,
  // preloadedState,
  middleware: middleware,
});
sagaMiddleware.run(rootSaga);

// store.subscribe(() => {
//   localStorage.setItem('reduxState', JSON.stringify(store.getState()));
// });
export type RootState = ReturnType<typeof store.getState>;

