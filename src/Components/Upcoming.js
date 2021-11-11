import React, { useEffect, useState } from "react";
import axios from "axios";
import keys from "./Keys";

function Upcoming() {
  const [upcoming, setUpcoming] = useState([]);
  const getUpcoming = async () => {
    const response = await axios.get(
      `${keys.BASEURL}/3/movie/upcoming?api_key=${keys.APIKEY}&language=en-US&page=1`
    );
    console.log();
    console.log(response);
    setUpcoming(response?.data?.results);
  };

  useEffect(() => {
    getUpcoming();
  }, []);
  return (
    <div className="px-2">
      <h2 className="light">Upcoming</h2>
      <div
        className="upcoming"
        style={{
          backgroundImage:
            "url(" + `${keys.POSTERIMG}/${upcoming[0]?.poster_path}` + ")",
        }}
      >
          {upcoming.map((tracks) => {
            return (<div className="light upcomingCard shadow round">
            <img
              variant="top"
              className="MovieThumb mb-2 mx-2"
              src={`${keys.POSTERIMG}/${tracks.poster_path}`}
              alt="moviethumb"
            />
            </div>);
          })}
      </div>
    </div>
  );
}
export default Upcoming;
