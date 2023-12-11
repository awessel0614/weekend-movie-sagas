import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { useHistory } from 'react-router-dom';
import { Card, CardContent, Grid, Paper, Typography } from '@mui/material';
import { styled } from '@mui/system';




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

  const StyledMovieListImage = styled('div')(({ theme }) => ({
    "&:hover": {
      cursor: "pointer",
      opacity: 0.5,
      border: `solid 5px blue`,
    },
  }));


          

  return (
    <>
        <Grid container sx={{justifyContent: "center"}}>
            {movies.map(movie => {
                return (
                    <>
                      <Grid
                        margin = {'15px'}
                      >
                        <Paper elevation={8}>
                          <Card 
                          style = {{ height: '350px', width: '225px', paddingBottom:'30px', backgroundColor: "lightblue"}} 
                          key={movie.id}
                          >
                              <CardContent>
                                      <h3>{movie.title}</h3>
                                      <StyledMovieListImage  >
                                        <div>
                                          <img
                                            src={movie.poster}
                                            alt={movie.title}
                                            onClick={() => clickedMovie(movie.id)}
                                          />
                                        </div>
                                      </StyledMovieListImage>
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





