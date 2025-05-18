import {configureStore} from "@reduxjs/toolkit"; 
import userReducer from './UserSlice';
import moviesReducer from './MoviesSlice'
import GptSlice from "./GptSlice";
import LanguageSlice from "./LanguageSlice";
const AppStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: GptSlice,
    lang: LanguageSlice,
  },
});

export default AppStore;