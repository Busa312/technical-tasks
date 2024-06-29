import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-search-percentage',
  templateUrl: './search-percentage.component.html',
  styleUrl: './search-percentage.component.css'
})
export class SearchPercentageComponent {
  @Input() value1: string;
  @Input() value2: string[];

  get percentage(): number {
    if(!this.value1) return 0;
    let count = 0;
    this.value2.forEach(value=> {
      if (value.includes(this.value1)) {
        count += 1;
      }
    });
    return (count / this.value2.length) * 100;
  }
}
