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
import apiKey from "../../key";


@Injectable()
export class MovieSearchProvider {
  omdbApiUrl = 'http://www.omdbapi.com';

  constructor(public http: Http) {  }

  // Load base data
  load(): Observable<Search[]> {
    return this.http.get(`${this.omdbApiUrl}?s=batman&apikey=${apiKey}`)
      .map(res => <Search[]>res.json()['Search']);
  }

  searchMovies(searchParam: string): Observable<Search[]> {
    return this.http.get(`${this.omdbApiUrl}/?s=${searchParam}&apikey=${apiKey}`) 
      .map(res => <Search[]>(res.json().items))
  }

}
