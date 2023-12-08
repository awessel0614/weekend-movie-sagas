import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { useHistory } from 'react-router-dom';

function MovieList() {
  let history= useHistory();
  const dispatch = useDispatch();
  const movies = useSelector(store => store.movies);

  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });
  }, []);


  const clickedMovie = (event) => {
      history.push("/detailpage/:id")

  }

  return (
    <main>
      <h1>MovieList</h1>
      <section className="movies">
        {movies.map(movie => {
          return (
            <div data-testid='movieItem' key={movie.id}>
              <h3>{movie.title}</h3>
              <img src={movie.poster} alt={movie.title} onClick={clickedMovie}/>
            </div>
          );
        })}
      </section>
    </main>

  );
}


export default MovieList;