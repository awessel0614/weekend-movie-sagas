import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
  yield takeEvery('FETCH_MOVIES', fetchAllMovies);
  yield takeEvery('FETCH_DETAIL_PAGE', fetchDetailPage);
  yield takeEvery('FETCH_GENRES', fetchGenres)
}

function* fetchAllMovies() {
  try {
    // Get the movies:
    const moviesResponse = yield axios.get('/api/movies');
    // Set the value of the movies reducer:
    yield put({
      type: 'SET_MOVIES',
      payload: moviesResponse.data
    });
  } catch (error) {
    console.log('fetchAllMovies error:', error);
  }
}

function* fetchDetailPage(action) {
  try {
    const results = yield axios.get(`/api/movies/${action.payload}`);
    console.log(`getting detail response`, results.data);
    yield put({type: 'SET_DETAILS', payload: results.data});
  } catch (error) {
    console.log(`error in get details for single movie`, error);
    alert('Something went wrong!');
  }
}

function* fetchGenres(action) {
  try{ 
    const results = yield axios.get(`/api/genres/${action.payload}`);
    console.log(`getting genre response:`, results.data);
    yield put({ type: 'SET_GENRES', payload: results.data });

  } catch (error) {
    console.log(`error in get details for genres`, error);
    alert('Something went wrong!');
  }
}



// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
  switch (action.type) {
    case 'SET_MOVIES':
      return action.payload;
    default:
      return state;
  }
}

//Used to store details for single movie
const movieDetail = (state = [], action) => {
  switch (action.type) {
    case 'SET_DETAILS':
      return action.payload;
    default:
      return state;
  }
}

// Used to store the movie genres
const genres = (state = [], action) => {
  switch (action.type) {
    case 'SET_GENRES':
      return action.payload;
    default:
      return state;
  }
}

// const movieDetail = (state = [], action) => {
//   switch (action.type) {
//     case 'SET_DETAILS':
//       return action.payload;
//     case 'RESET_DETAIL_PAGE':
//       return [];
//     default:
//       return state;
//   }
// }



// Create one store that all components can use
const storeInstance = createStore(
  combineReducers({
    movies,
    movieDetail,
    genres,
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

export default storeInstance;