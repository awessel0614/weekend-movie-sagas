import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router';
import axios from 'axios';




function DetailPage() {
   const dispatch = useDispatch();
   const params = useParams();

   const details = useSelector(store => store.details);
   

    useEffect(() => {
        console.log(details);
        dispatch({type: 'FETCH_MOVIES', payload: params});
    }, [params]);

    return (
        <>
        </>
    );
}

export default DetailPage;