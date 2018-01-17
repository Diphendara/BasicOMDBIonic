import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MoviesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

import { Search } from '../../models/search';
import { MovieDetailsPage } from '../../pages/movie-details/movie-details';
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
    searchsProvider.searchMovies('Batman').subscribe(movies => {
      this.movies = movies;
      this.originalMovies = movies;
    })
  }

  goToDetails(imdbID: string, title: string) {
    this.navCtrl.push(MovieDetailsPage, { imdbID, title });
  }

  searchMovie(searchEvent) {
    let term = searchEvent.target.value
    if (term.trim() === '' || term.trim().length < 3) {
      this.movies = this.originalMovies;
    } else {
      this.searchsProvider.searchMovies(term).subscribe(movies => {
        this.movies = movies
      });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MoviesPage');
  }

}
