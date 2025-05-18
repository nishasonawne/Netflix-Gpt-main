import React, { FC, useEffect } from 'react'
import { VideoBackgroundMovie } from '../utils/TypeScrptProps';
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/Constant';
import {setKeyForVideo} from "../reduxStore/MoviesSlice";

const useNowPlayingVideo= ( movieId:number) => {
  const dispatch = useDispatch();
  useEffect(() => {
    getVideosfromApi();
  });
  const getVideosfromApi = async () => {
    await fetch(
      "https://api.themoviedb.org/3/movie/" +
        `${movieId}` +
        "/videos?language=en-US",
      API_OPTIONS
    )
      .then((response) => response.json())
      .then((response) => {
        const youtubeKey = Object.values(response.results).filter(
          (video: any) => {
            return video.type === "Trailer";
          }
        );
       if (youtubeKey.length > 0 && youtubeKey[0]) {
        //@ts-ignore
         dispatch(setKeyForVideo(youtubeKey[0].key));
       }
     
      })
      .catch((err) => console.error(err));
  };

};

export default useNowPlayingVideo;