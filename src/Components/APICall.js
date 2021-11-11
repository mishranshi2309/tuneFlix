import React, {useEffect} from 'react';
import axios from 'axios';


function APICall() {
    const getMovies = async() =>{
       const response =  await axios.get(`https://api.themoviedb.org/3/movie/550?api_key=2b480316174db72e2cd139dcfed59b08`);
       console.log(response);
    }
    useEffect(() => {
        getMovies()
    }, [])
    return (
        <div>
            MOVIE API CALLED!!{
            
            }
        </div>
    )
}

export default APICall
