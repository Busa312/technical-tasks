import {Component, OnInit} from '@angular/core';
import {Task2Service} from "../services/task-2.service";
import {FormControl} from "@angular/forms";
import {debounceTime} from "rxjs";

@Component({
  selector: 'app-task-2',
  templateUrl: './task-2.component.html',
  styleUrl: './task-2.component.css'
})
export class Task2Component implements OnInit{
  movies: any[] = [];
  movieTitleSearch: FormControl = new FormControl();

  constructor(private task2Service: Task2Service) {
  }

  ngOnInit() {
    this.getMovies();

    this.movieTitleSearch.valueChanges.pipe(
      debounceTime(1000)
    ).subscribe(title => {
      if (!title) {
        this.getMovies();
      } else {
        this.getMoviesByTitle(title);
      }
    })
  }

  getMovies() {
    this.task2Service.getMovies().subscribe({
      next: val => {
        this.movies = val.results.filter(val => val.primaryImage);
      }
    });
  }

  getMoviesByTitle(title: string) {
    this.task2Service.getMoviesByTitle(title).subscribe({
      next: val => {
        this.movies = val.results.filter(val => val.primaryImage);
      }
    })
  }
}
