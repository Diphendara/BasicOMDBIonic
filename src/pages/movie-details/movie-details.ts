import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MovieDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

import { MovieSearchProvider } from '../../providers/movie-search';
import { Movie } from '../../models/movie';

@IonicPage()
@Component({
  selector: 'page-movie-details',
  templateUrl: 'movie-details.html',
})
export class MovieDetailsPage {
  movie: Movie;
  title: string;
  imdbID: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private searchsProvider: MovieSearchProvider ) {
    this.title = navParams.get('title');
    this.imdbID = navParams.get('imdbID');
    searchsProvider.loadDetails(this.imdbID).subscribe(movie => {
      this.movie = movie;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MovieDetailsPage');
  }

}
