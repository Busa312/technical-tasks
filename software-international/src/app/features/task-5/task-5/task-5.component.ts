import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-task-5',
  templateUrl: './task-5.component.html',
  styleUrl: './task-5.component.css'
})
export class Task5Component {
  control: FormControl = new FormControl();
  strArr: string[] = ['ქონება', 'ქონების პრივატიზება',
  'ქონების გასხვისება', 'საქონლის გასხვისება']
}
