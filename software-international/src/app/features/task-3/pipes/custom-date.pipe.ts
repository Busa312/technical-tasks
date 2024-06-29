import { Pipe, PipeTransform } from '@angular/core';
import {DatePipe} from "@angular/common";

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {

  transform(value: string): unknown {
    if (!value) return value;

    const regex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{7}Z$/;

    if (regex.test(value)) {
      const datePipe = new DatePipe('en-US');
      return datePipe.transform(value, 'HH:mm:ss MMM dd yyyy') || value;
    } else {
      return value;
    }
  }

}
