import React, { useEffect, useState } from "react";
import axios from "axios";
import keys from "./Keys";
import DisplayList from "./DisplayList";
import { Row } from "react-bootstrap";

function TopRated() {
    const [topRated, setTopRated] = useState([]);
    const getTopRated = async () => {
        const response = await axios.get(
            `${keys.BASEURL}/3/movie/top_rated?api_key=${keys.APIKEY}`
        );
        console.log(response?.data?.results);
        setTopRated(response?.data?.results);
    };

    useEffect(() => {
        getTopRated();
    }, []);
    return (
        <Row className="px-2">
            <div className="light">
                <h4 className="light">TopRated</h4>
                <DisplayList movieTrack={topRated} />
            </div>
        </Row>
    );
}

export default TopRated;
