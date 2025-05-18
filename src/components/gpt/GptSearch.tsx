import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptSearchMovies from './GptSearchMovies'
import { BG_URL } from '../../utils/Constant';

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={BG_URL} alt="logo" />
      </div>
      <GptSearchBar />
      <GptSearchMovies />
    </div>
  );
}

export default GptSearch