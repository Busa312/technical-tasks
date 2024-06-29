import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    NavBarComponent,
    CustomInputComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatLabel,
    RouterLink,
  ],
  exports: [
    ReactiveFormsModule,
    NavBarComponent,
    CustomInputComponent,
  ]
})
export class SharedModule { }
