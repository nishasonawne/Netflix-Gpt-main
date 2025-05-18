
interface Movie {
  id: number;
  original_title: string;
  releaseDate: string;
  overview: string;
  poster_path: string;
  // Add more properties as needed
}

interface MoviesState {
  nowPlayingMovies: Movie[];
  popularMovies: Movie[];
  youtubekey: number;
}
interface GptState {
  isGptEnabled: Boolean;
}
interface LanguageSlice {
  languageSelected:string;
}
interface RootState {
  movies: MoviesState;
  gpt: GptState;
  lang: LanguageSlice;
}
interface Videotitle {
  title: string;
  overview:string;
}
interface VideoBackgroundMovie {
  movieId: number;
}
interface MovieListProps {
  title: string;
  movie: Movie[];
}
interface MovieCardProps {
  path:string;
}
export type {
  RootState,
  Videotitle,
  VideoBackgroundMovie,
  MovieListProps,
  MovieCardProps,
};