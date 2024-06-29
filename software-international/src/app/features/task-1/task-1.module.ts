import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task1Component } from './task-1/task-1.component';
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";
import {MatButton} from "@angular/material/button";
import {MatFormField, MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatDatepicker, MatDatepickerModule, MatDateRangePicker} from "@angular/material/datepicker";
import {MatNativeDateModule, MatOption} from "@angular/material/core";
import {MatInput, MatInputModule} from "@angular/material/input";
import {MatSelect} from "@angular/material/select";



@NgModule({
  declarations: [
    Task1Component
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: Task1Component
      }
    ]),
    MatButton,
    MatFormField,
    MatCheckbox,
    MatFormFieldModule,
    MatInputModule,
    MatDateRangePicker,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDatepicker,
    MatInput,
    MatLabel,
    MatSelect,
    MatOption
  ]
})
export class Task1Module { }
