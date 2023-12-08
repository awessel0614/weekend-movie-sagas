import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router';
import axios from 'axios';
//import { Button } from '@mui/material';
//import Card from '@mui/material/Card';



function DetailPage() {
   const dispatch = useDispatch();
   const history = useHistory();
   const params = useParams();

   const [selectedMovie, setSelectedMovie] = useState({});

   const showClickedMovie = () => {
    axios.get(`/api/movie/${params.id}`).then((result) => {
        console.log(result.data);
        let theMovie = {...result.data[0]};
        setSelectedMovie(theMovie);
    }).catch((error) => {
        console.error(`Error in GET 'api/movie/{params.id}`, error);
        alert('Something went wrong!')
    })
}


    useEffect(() => {
        showClickedMovie();
        dispatch({type: 'FETCH_MOVIES'});
    }, []);

    return (
        <>
        <p>{selectedMovie.title}</p>
        <p>{selectedMovie.description}</p>
        
        </>
    );
}

export default DetailPage;