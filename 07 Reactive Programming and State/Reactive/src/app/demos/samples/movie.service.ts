import { Injectable } from '@angular/core'
import { MovieGenerator } from './movie-generator'
import { Observable, Observer, BehaviorSubject } from 'rxjs'
import { Movie } from './movie'

@Injectable()
export class MovieService {
  // private intervalSec = 3;
  private arrMovies: Movie[] = []
  private movies: BehaviorSubject<Movie[]> = new BehaviorSubject(this.arrMovies)

  constructor() {}

  getMovies(itemCount: number = 10): Observable<Movie[]> {
    console.log('using: getMovies()')
    console.log('reset movies')
    this.arrMovies = []

    let movieGenerator = MovieGenerator(itemCount)

    let mediaObservableArray: Observable<Movie[]> = new Observable(
      (observer: Observer<Movie[]>) => {
        for (let i = 0; i < itemCount; i++) {
          this.arrMovies.push(movieGenerator.next().value)
        }
        observer.next(this.arrMovies)
        observer.complete()
      }
    )
    return mediaObservableArray
  }

  getMovieStream(
    itemCount: number = 10,
    interval: number = 3
  ): Observable<Movie[]> {
    console.log('using: getMovieStream()')
    console.log('reset movies')
    this.arrMovies = []

    let movieGenerator = MovieGenerator(itemCount)

    let mediaObservableArray: Observable<Movie[]> = Observable.create(
      (observer: Observer<Movie[]>) => {
        for (let i = 0; i < itemCount; i++) {
          this.addItemwWithDelay(1, i, movieGenerator.next().value, observer)
        }
      }
    )
    return mediaObservableArray
  }

  private addItemwWithDelay(
    intervalSec: number,
    idx: number,
    item: Movie,
    observer: Observer<Movie[]>
  ): void {
    setTimeout(() => {
      this.arrMovies.push(item)
      observer.next(this.arrMovies)
    }, (idx + intervalSec) * 1000)
  }

  private buildMediaWithDelay(initialCount: number): Movie[] {
    let movieGenerator = MovieGenerator(initialCount)

    this.arrMovies = new Array()
    for (let i = 0; i < initialCount; i++) {
      setTimeout(() => {
        this.arrMovies.push(movieGenerator.next().value)
        this.movies.next(this.arrMovies)
      }, i * 500)
    }
    return this.arrMovies
  }

  getMoviesBS(): Observable<Movie[]> {
    if (this.arrMovies.length == 0) {
      this.buildMediaWithDelay(8)
    }

    return this.movies
  }

  addMovie(m: Movie) {
    this.arrMovies.push(m)
    this.movies.next(this.arrMovies)
  }
}
