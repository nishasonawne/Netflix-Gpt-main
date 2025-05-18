import React, { FC } from 'react'
import { MovieCardProps } from '../../utils/TypeScrptProps'
import { IMG_CDN_URL } from '../../utils/Constant';

const MovieCard:FC<MovieCardProps> = ({path}) => {
  return (
    <div className="w-40 h-48 mr-2">
      <img
        alt="Movie Image"
        src={`${IMG_CDN_URL}${path}`}
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export default MovieCard;