import React, { useEffect, useState } from "react";
import axios from "axios";
import keys from "./Keys";
import DisplayList from "./DisplayList";
import { Row } from "react-bootstrap";

function Trending() {
  const getTrending = async () => {
    const responseTrends = await axios.get(
      `${keys.BASEURL}/3/trending/all/day?api_key=${keys.APIKEY}`
    );
    console.log(responseTrends?.data?.results);
    setTrends(responseTrends?.data?.results);
  };
  const [trends, setTrends] = useState([]);
  useEffect(() => {
    getTrending();
  }, []);
  return (
    <Row className="px-2">
      <div className="light">
        <h4 className="light">Trending</h4>
        <DisplayList movieTrack={trends} />
      </div>
    </Row>
  );
}

export default Trending;
