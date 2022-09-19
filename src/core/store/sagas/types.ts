export interface Data<T> {
  data:T;
}
export interface MovieType {
  page: number;
  total_pages: number;
  total_results: number;
  results: MovieArray[];
}

export interface MovieArray {
  poster_path: string;
  title: string ;
  id: number;
  overview: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
  genres: Genre[];
  runtime: number;
  revenue: number;
}

export interface GenresArray {
  genres:Genre[]
}

export interface Genre {
  id: number;
  name: string;
}