import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MoviesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

import { Search } from '../../models/search';
import { MovieSearchProvider } from '../../providers/movie-search';


@IonicPage()
@Component({
  selector: 'page-movies',
  templateUrl: 'movies.html',
})
export class MoviesPage {

  movies: Search[];
  originalMovies: Search[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private searchsProvider: MovieSearchProvider) {
    searchsProvider.load().subscribe(movies => {
      this.movies = movies;
      console.log(movies); //TODO delete this
        }) 
       }

  searchMovie(searchEvent) {
    let term = searchEvent.target.value
    // We will only perform the search if we have 3 or more characters
    if (term.trim() === '' || term.trim().length < 3) {
      // Load cached users
      this.movies = this.originalMovies;
    } else {
      // Get the searched users from github
      this.searchsProvider.searchMovies(term).subscribe(movies => {
        this.movies = movies
      });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MoviesPage');
  }

}
