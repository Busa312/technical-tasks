import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task2Component } from './task-2/task-2.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    Task2Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: Task2Component
      }
    ]),
  ]
})
export class Taks2Module { }
