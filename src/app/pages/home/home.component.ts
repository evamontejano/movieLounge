import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: MovieApiServiceService) { }

  bannerResult: any = [];
  trendingMovieResult: any = [];
  actionMovieResult:any=[];
  adventureMovieResult:any=[];
  animationMovieResult:any=[];
  comedyMovieResult:any=[];
  documentaryMovieResult:any=[];
  sciencefictionMovieResult:any=[];
  thrillerMovieResult:any=[];

  ngOnInit(): void {
    this.bannerData();
    this.trendingData();
    this.actionMovie();
    this.animationMovie();
    this.adventureMovie();
    this.comedyMovie();
    this.documentaryMovie();
    this.sciencefictionMovie();
    this.thrillerMovie();
  }


bannerData() {
  this.service.bannerApiData().subscribe((result) => {
    console.log(result, 'banner');
    this.bannerResult = result.results;
  });
}

trendingData()
{
  this.service.trendingMovieApiData().subscribe((result) => 
  {
    console.log(result,'trending');
    this.trendingMovieResult = result.results;
  });
}

actionMovie() {
  this.service.fetchActionMovies().subscribe((result) => {
    console.log(result,'action');
    this.actionMovieResult = result.results;
  });
}

adventureMovie() {
  this.service.fetchAdventureMovies().subscribe((result) => {
    console.log(result,'adventure');
    this.adventureMovieResult = result.results;
  });
}

animationMovie() {
  this.service.fetchAnimationMovies().subscribe((result) => {
    console.log(result,'animation');
    this.animationMovieResult = result.results;
  });
}

comedyMovie() {
  this.service.fetchComedyMovies().subscribe((result) => {
    console.log(result,'comedy');
    this.comedyMovieResult = result.results;
  });
}

documentaryMovie() {
  this.service.fetchDocumentaryMovies().subscribe((result) => {
    console.log(result,'documentary');
    this.documentaryMovieResult = result.results;
  });
}

sciencefictionMovie() {
  this.service.fetchScienceFictionMovies().subscribe((result) => {
    console.log(result,'sciencefiction');
    this.sciencefictionMovieResult = result.results;
  });
}

thrillerMovie() {
  this.service.fetchThrillerMovies().subscribe((result) => {
    console.log(result,'thriller');
    this.thrillerMovieResult = result.results;
  });
}
}
