import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-task-4',
  templateUrl: './task-4.component.html',
  styleUrl: './task-4.component.css'
})
export class Task4Component implements OnInit{
  currentMonth: Date;
  daysInMonth: Date[];
  currentDay: number;
  weekdays: string[];

  ngOnInit(): void {
    this.currentMonth = new Date();
    this.daysInMonth = this.getDaysInMonth(this.currentMonth);
    this.currentDay = new Date().getDate();
    this.weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  }

  getDaysInMonth(date: Date): Date[] {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const days: Date[] = [];

    let startDayIndex = firstDayOfMonth.getDay();
    if (startDayIndex === 0) startDayIndex = 7;

    for (let i = 1; i < startDayIndex; i++) {
      days.push(null);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }

    return days;
  }
}
