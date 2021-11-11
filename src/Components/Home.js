import React, {useState, useEffect} from 'react';
import PopularMovies from './PopularMovies';
import Trending from './Trending';
import axios from 'axios';
import keys from "./Keys";
import SearchedTrack from './SearchedTrack';
import TopRated from './TopRated';
import Upcoming from './Upcoming';

function Home() {
    const [searchValue, setSearchValue]= useState();
    const [searched, setSearched] = useState([]);
    const handleChange=(e)=>{
        e.preventDefault();
        console.log(e.target.value);
        setSearchValue(e.target.value);
    }
    const getSearch= async() =>{
        const response = await axios.get(
            `${keys.BASEURL}/3/search/movie?api_key=${keys.APIKEY}&language=en-US&page=1&query=${searchValue}`
          );
          console.log("search resp::",response);
          setSearched(response.data?.results);
    }
    useEffect(() => {
        getSearch();
          
    }, [searchValue])
    return (
        <div className="bg-dark">
        <nav class="navbar navbar-expand-lg navbar-light px-5 bg-dark shadow fixed-top">
        <span class="navbar-brand light">TuneFlix</span>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link light">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link">Create List</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">Favourite</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">Logout</a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0 d-flex">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" name="search" onChange={handleChange}/>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
           
            <div className="mt50">
                <SearchedTrack tracks={searched}/>
                <Trending/>
                <PopularMovies/>
                <TopRated/>
                <Upcoming/>
            </div>
        </div>
    )
}

export default Home
