import React, { useEffect, useState } from "react";
import axios from "axios";
import keys from "./Keys";
import DisplayList from "./DisplayList";

function SearchedTrack({tracks}) {
    
  return (
    <div>
    {tracks?
      <div className="px-2"><h4 className="light">Search Results</h4>
      <DisplayList movieTrack={tracks}/></div>
      : null}
    </div>
  );
}

export default SearchedTrack;
