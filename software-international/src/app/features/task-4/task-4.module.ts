import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task4Component } from './task-4/task-4.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    Task4Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: Task4Component
    }])
  ]
})
export class Task4Module { }
