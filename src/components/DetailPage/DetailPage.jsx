import React from 'react';
import { Button } from "@mui/material";
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Card, CardContent, Grid, Paper, Container } from '@mui/material';

function DetailPage() {
   let history= useHistory();

   const genreDetail = useSelector(store => store.genres)
   const movieDetail = useSelector(store => store.movieDetail);

   const movieGenre = () => {
    return genreDetail[0] ? genreDetail.map(movie => movie.name).join(', ') : null;
   }

    return (
    <>
         <Button variant="contained" onClick={() => history.push('/')}>Back to movie list</Button>
            <br></br>
            <br></br>

        <Container>

            <Grid container sx={{justifyContent: "center"}}>
                <Paper elevation={8}>
                    <Card style = {{ backgroundColor: "lightblue"}}>
                        <CardContent>
                            <img src={movieDetail.poster} alt={movieDetail.title} />
                            <h2>{movieDetail.title}</h2>
                            <h3>Genre(s): {movieGenre()}</h3>
                            <p>{movieDetail.description}</p>
                        </CardContent>
                    </Card>
                </Paper>
            </Grid>
        </Container>
    </>             
    );
}

export default DetailPage;