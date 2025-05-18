import React, { FC } from 'react'
import MovieCard from './MovieCard'; 
import { MovieListProps } from "../../utils/TypeScrptProps";

const MovieList: FC<MovieListProps> = ({ title, movie }) => {
 
  return (
    <div className='px-6 '>
      <h1 className='text-3xl py-2 p-4 text-white'>{title}</h1>
      <div className="overflow-x-scroll flex p-4">
        <div className="flex">
          {movie?.map((movie) => (
            <MovieCard key={movie.id} path={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;