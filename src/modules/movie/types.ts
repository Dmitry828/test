export interface MoviePageState {
  movie: Record<string, never> | DataMovie<MovieDetails>;
  credits: Record<string, never> | DataMovie<MovieCredits>;
  similarMovies: Record<string, never> | any;
  isLoading: boolean;
  isError: boolean;
}

export interface DataMovie<T> {
  data: T ;
}

export interface MovieDetails {
  poster_path: string,
  id: number,
  title: string,
  genres: Genre[]
  release_date: string,
  runtime: number,
  vote_average: number,
  overview:string,
  production_countries?: [
    {
      iso_3166_1?: string,
    }
  ]
}

export interface MovieCredits {
  cast: Cast[];
}
export interface Cast {
  name:string,
  id:number
  character:string,
  profile_path:string
}
export interface Genre {
  id: number,
  name: string
}