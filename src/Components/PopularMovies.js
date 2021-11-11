import React, { useEffect, useState } from "react";
import axios from "axios";
import keys from "./Keys";
import DisplayList from "./DisplayList";

function PopularMovies() {
  const getPopular = async () => {
    const responsePopular = await axios.get(
      `${keys.BASEURL}/3/movie/popular?api_key=${keys.APIKEY}&language=en-US&page=1`
    );
    console.log(responsePopular?.data?.results);
    setPopular(responsePopular?.data?.results);
  };
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    getPopular();
  }, []);

  return (
    <div className="px-2">
      <h4 className="light"> Popular Movies</h4>
      <DisplayList movieTrack={popular}/>
    </div>
  );
}

export default PopularMovies;
