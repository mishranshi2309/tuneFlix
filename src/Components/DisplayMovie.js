import React,{useEffect, useState} from "react";
import axios from "axios";
import keys from "./Keys";
import {  useLocation } from "react-router-dom";

import ReactPlayer from 'react-player';

function DisplayMovie(props) {
  const {state} = useLocation();  
  const movieId= state.movieId;
  const posterImg = state.posterImg;
  const [movieKey, setMovieKey]= useState();
  const getVideo = async() =>{
    const response = await axios.get(
      `${keys.BASEURL}/3/movie/${movieId}/videos?api_key=${keys.APIKEY}&language=en-US`
    );
    setMovieKey(response.data?.results[0]?.key)
    console.log(response);
  }
  useEffect(() => {
    getVideo();
  }, [])
  return (
    <div classname="bg-dark">
      <ReactPlayer
      controls
      width="100%"
      height="700px"
      url={`https://youtube.com/watch?v=${movieKey}`}
    />
    </div>
  );
}

export default DisplayMovie;
