import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../utils/TypeScrptProps';
import MovieList from './MovieList';

const SecondaryContainer = () => {
   const movies = useSelector(
     (store: RootState) => store?.movies?.nowPlayingMovies
   );
   const popularmovies = useSelector(
     (store: RootState) => store?.movies?.popularMovies
   );
  return (
    movies && (
      <div className="bg-black">
        <div className="-mt-52 relative z-20">
          <MovieList title={"Now Playing"} movie={movies} />
        </div>
        <MovieList title={"Trending"} movie={movies} />
        <MovieList title={"Popular"} movie={popularmovies} />
        <MovieList title={"Upcoming Movies"} movie={movies} />
      </div>
    )
  );
}

export default SecondaryContainer