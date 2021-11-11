import React from "react";
import keys from "./Keys";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function DisplayList({ movieTrack }) {
  const navigate = useNavigate();
  const handlePlay = (id, posterImg) => {
    console.log(id);
    navigate("/displayMovie", {
      state: {
        movieId: id,
        posterImg,
      },
    });
  };
  const handleKnowMore = (tracks)=>{
    console.log(tracks);
    // create a modal that contains al info for that movie 
    
  }
  return (
    <div className="PopMoviesTag">
      <div className="PopulerMovies">
        {movieTrack.map((tracks, index) => (
          <div className="MovieCard">
            <img
              variant="top"
              className="MovieThumb"
              src={`${keys.POSTERIMG}/${tracks.poster_path}`}
              alt="moviethumb"
            />
            <div>
              {/*<div className="light">
                {tracks.title ? `${tracks.title}` : `${tracks.name}`}
        </div>*/}
              <div className="d-flex justify-content-between mt-2">
                <Button
                  primary
                  onClick={() => {
                    handlePlay(tracks.id, tracks.poster_path);
                  }}
                >
                  Play
                </Button>
                <Button
                warning
                onClick={() => {handleKnowMore(tracks)}}
                >Know More</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayList;
