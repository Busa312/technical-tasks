import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-task-3',
  templateUrl: './task-3.component.html',
  styleUrl: './task-3.component.css'
})
export class Task3Component {
  control: FormControl = new FormControl();
}
