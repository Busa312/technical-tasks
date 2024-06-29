import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task3Component } from './task-3/task-3.component';
import { CustomDatePipe } from './pipes/custom-date.pipe';
import {RouterModule} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";



@NgModule({
  declarations: [
    Task3Component,
    CustomDatePipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: Task3Component
    }]),
    SharedModule,
  ]
})
export class Task3Module { }
