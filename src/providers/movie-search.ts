import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

/*
  Generated class for the MovieSearchProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

import { SearchResult } from '../models/searchResult';
import { Movie } from '../models/movie';

import apiKey from "../../key";



@Injectable()
export class MovieSearchProvider {
  omdbApiUrl = 'http://www.omdbapi.com';

  constructor(public http: Http) {  }

  loadDetails(imdbID: string): Observable<Movie> {
    return this.http.get(`${this.omdbApiUrl}/?i=${imdbID}&type=movie&apikey=${apiKey}`)
      .map(res => <Movie>(res.json()))
  }

  searchMovies(searchParam: string): Observable<Array<SearchResult>> {
    return this.http.get(`${this.omdbApiUrl}/?s=${searchParam}&type=movie&apikey=${apiKey}`) 
      .map(res => <SearchResult[]>(res.json()['Search']))
  }

}
