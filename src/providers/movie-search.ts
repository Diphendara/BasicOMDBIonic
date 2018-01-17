import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

/*
  Generated class for the MovieSearchProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

import { Search } from '../models/search';
import { Movie } from '../models/movie';

import apiKey from "../../key";



@Injectable()
export class MovieSearchProvider {
  omdbApiUrl = 'http://www.omdbapi.com';

  constructor(public http: Http) {  }

  loadDetails(imdbID: string): Observable<Movie> {
    return this.http.get(`${this.omdbApiUrl}/?i=${imdbID}&apikey=${apiKey}`)
      .map(res => <Movie>(res.json()))
  }

  searchMovies(searchParam: string): Observable<Array<Search>> {
    console.log(`${this.omdbApiUrl}/?s=${searchParam}&apikey=${apiKey}`);
    return this.http.get(`${this.omdbApiUrl}/?s=${searchParam}&apikey=${apiKey}`) 
      .map(res => <Search[]>(res.json()['Search']))
  }

}
