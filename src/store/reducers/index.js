import { combineReducers } from 'redux';

import app from './app';
import documentary from './documentary';
import genres from './genres';
import family from './family';
import movies from './movies';
import series from './series';
import search from './search';

export default combineReducers({
  app,
  documentary,
  genres,
  family,
  movies,
  series,
  search,
});
