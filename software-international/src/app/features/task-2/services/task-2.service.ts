import {HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class Task2Service {
  URL = 'https://moviesdatabase.p.rapidapi.com/titles/'

  constructor(private http: HttpClient) { }

  getMovies(): Observable<{results: any[]}>{
    return this.http.get(this.URL) as Observable<{ results: any[] }>;
  }

  getMoviesByTitle(title: string): Observable<{results: any[]}> {
    let url = this.URL + 'search/title/' + title;

    const params = new HttpParams().append('exact', false)
    return this.http.get(url, {params: params}) as Observable<{ results: any[] }>;
  }
}
