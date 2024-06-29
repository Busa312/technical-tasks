import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task5Component } from './task-5/task-5.component';
import {RouterModule} from "@angular/router";
import { SearchPercentageComponent } from './components/search-percentage/search-percentage.component';
import {SharedModule} from "../../shared/shared.module";



@NgModule({
  declarations: [
    Task5Component,
    SearchPercentageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: Task5Component
    }]),
    SharedModule
  ]
})
export class Task5Module { }
