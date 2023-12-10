import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { useHistory } from 'react-router-dom';

function MovieList() {
  let history= useHistory();
  const dispatch = useDispatch();
  const movies = useSelector(store => store.movies);


  // function clickedMovie (id) {
  //   console.log("running clickedMovie function");
  //   console.log(id);

  //   dispatch({type:'FETCH_DETAIL_PAGE', payload:id});

  //   history.push(`/detailpage/${id}`)

  // };
//^^^this is what i originally had


  const clickedMovie = id => {
    console.log("running clickedMovie function");
    console.log(id);

    dispatch({type:'FETCH_DETAIL_PAGE', payload:id});

    history.push(`/detailpage/${id}`)

  };


  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });
  }, []);


 

  return (
    <main>
      <h1>MovieList</h1>
      <section className="movies">
        {movies.map(movie => {
          return (
            <div data-testid='movieItem' key={movie.id}>
              <h3>{movie.title}</h3>
              <img src={movie.poster} alt={movie.title} onClick={() => clickedMovie(movie.id)}/>
            </div>
          );
        })}
      </section>
    </main>

  );
}


export default MovieList;