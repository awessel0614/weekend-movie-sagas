import React from 'react';
import { Button } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router';
import axios from 'axios';




function DetailPage() {
   let history= useHistory();
   const dispatch = useDispatch();
   const params = useParams();

   const movieDetail = useSelector(store => store.movieDetail);
   const movieGenre = movieDetail[0] ? movieDetail.map(movie => movie.name).join(', ') : null;

    useEffect(() => {
        console.log(movieDetail);
        dispatch({type: 'FETCH_DETAIL_PAGE', payload: params});
    }, [params]);


    // const backButton = (event) => {
    //     event.preventDefault();
    //     dispatch({type: 'RESET_DETAIL_PAGE'})

    //     history.push('/');
    // }
    //^^code to try and make the back button clear the reducer



    return (
        <>

<Button variant="outlined" onClick={() => history.push('/')}>Back to movie list</Button>


{/* <Button variant="outlined" onClick={backButton}>Back to movie list</Button> */}
{/* ^^this was part of the code i tried to use to clear the
movieDetail reducer when the back button was clicked */}

<br></br>
        {/* {movieDetail.map((thing) =>
            <div key={thing.id}>
                <h1>{thing.title}</h1>
                <h2>{thing.name}</h2>
                <p>{thing.description}</p>

            </div>
        
        )} */}
        {/* ^^^what i originally had, not sure why it 
        didn't work, and why it was also making things
        appear on the main page */}

        <img src={movieDetail[0].poster} alt={movieDetail[0].title} />
        <p>{movieDetail[0].title}</p>
        {/* {movieDetail.map((movie) =>
           <div key={movie.id}>
           {movie.name}
           </div>
        )} */}
         <p>{movieGenre}</p>
        <p>{movieDetail[0].description}</p>


        </>
    );
}

export default DetailPage;