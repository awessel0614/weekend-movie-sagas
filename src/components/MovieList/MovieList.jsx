import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { useHistory } from 'react-router-dom';
import { Card, CardContent, Grid, Paper, Typography } from '@mui/material';




function MovieList() {
  let history= useHistory();
  const dispatch = useDispatch();
  const movies = useSelector(store => store.movies);


  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });
  }, []);

  const clickedMovie = id => {
    console.log("running clickedMovie function");
    console.log(id);

    dispatch({type:'FETCH_DETAIL_PAGE', payload:id});
    dispatch({type:'FETCH_GENRES', payload:id});

    history.push(`/detailpage/${id}`)

  };


  return (
    // <main>
    //   <h1>MovieList</h1>
    //   <section className="movies">
    //     {movies.map(movie => {
    //       return (
    //         <div data-testid='movieItem' key={movie.id}>
    //           <h3>{movie.title}</h3>
    //           <img src={movie.poster} alt={movie.title} onClick={() => clickedMovie(movie.id)}/>
    //         </div>
    //       );
    //     })}
    //   </section>
    // </main>
    <>
        <Grid
          container
        >
            {movies.map(movie => {
                return (
                    <>
                      <Grid
                        
                        onClick={() => clickedMovie(movie.id)}
                        margin = {'15px'}
                      >
                        <Paper elevation={8}>
                          <Card 
                          style = {{ height: '350px', width: '225px', backgroundColor: "lightblue"}} 
                          key={movie.id}
                          >
                              <CardContent>
                                  
                                      <h3>{movie.title}</h3>
                                      <img src={movie.poster} alt={movie.title} />
                                  
                              </CardContent>
                          </Card>
                        </Paper>
                      </Grid> 
                    </>
                )
            })}

        </Grid>
    </>
  );
}


export default MovieList;