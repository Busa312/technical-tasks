import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task2Component } from './task-2/task-2.component';
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import {SharedModule} from "../../shared/shared.module";



@NgModule({
  declarations: [
    Task2Component,
    MovieCardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: '',
        component: Task2Component
      }
    ]),
    SharedModule,
  ]
})
export class Taks2Module { }
