import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from '../services/movie.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css',
  providers: [MovieService]
})
export class MovieComponent {
  constructor (private movieService: MovieService){}

  name: string;
  movie: any;

  getMovie(){
    if (this.name.length > 0){
      this.movieService.getMovie(this.name).subscribe((data: any) => this.movie = data);
    }
  }
}
