import { Injectable } from "@angular/core";
import { Movie } from "./Movie";

@Injectable({
  providedIn: "root"
})
export class MovieService {
  private movies: Movie[] = [];

  constructor() {}

  getMovies(itemCount: number = 8): Movie[] {
    console.log("using: getMedia()");
    console.log("reset media$");
    this.movies = [];

    // let movieGenerator = MovieGenerator(itemCount);

    for (let i = 0; i < itemCount; i++) {
      this.movies.push(new Movie());
    }

    return this.movies;
  }
}
