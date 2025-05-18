import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/Constant";
import { addPopularMovies } from "../reduxStore/MoviesSlice";
import { useEffect } from "react";

const usePopular=()=>{
      const dispatch = useDispatch();
     const getNowPlayingMovies = async () => {
       const data = await fetch(
         "https://api.themoviedb.org/3/movie/popular?page=1",
         API_OPTIONS
       );
       const json = await data.json();
       dispatch(addPopularMovies(json.results));
     };
     useEffect(() => {
       getNowPlayingMovies();
     }, []);
}
export default usePopular;