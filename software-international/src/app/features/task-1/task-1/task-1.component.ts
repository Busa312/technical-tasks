import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {TaskOneService} from "../services/task-one.service";

@Component({
  selector: 'app-task-1',
  templateUrl: './task-1.component.html',
  styleUrl: './task-1.component.css'
})
export class Task1Component implements OnInit, OnDestroy {
  form: FormGroup;

    constructor(private fb: FormBuilder, private taskService: TaskOneService) {
      if (taskService.form) {
        this.form = taskService.form;
      }
    }

    ngOnInit() {
      if (!this.form) {
        this.form = this.fb.group({
          companies: this.fb.array([])
        });
      }
    }

    get companies(): FormArray {
      return this.form.get('companies') as FormArray;
    }


    addCompany() {
      this.companies.push(this.fb.group({
        companyName: [null],
        companyWebsite: [null],
        companyDescription: [null],
        positions: this.fb.array([])
      }));
    }

    addPosition(idx: number) {
      const positionGroup = this.fb.group({
        positionName: [null],
        positionLevel: [null],
        positionDescription: [null],
        isCurrentlyWorking: [false],
        fromDate: [null],
        toDate: [null]
      });

      positionGroup.get('isCurrentlyWorking')?.valueChanges.subscribe(isWorking => {
        if (isWorking) {
          positionGroup.get('toDate')?.setValue(null);
          positionGroup.get('toDate')?.disable();
        } else {
          positionGroup.get('toDate')?.enable();
        }
      });

      this.getPositions(idx).push(positionGroup);
     }

    removePosition(companyIndex: number, positionIndex: number) {
        this.getPositions(companyIndex).removeAt(positionIndex);
    }

    getPositions(companyIndex: number): FormArray {
      return this.companies.at(companyIndex).get('positions') as FormArray;
    }

    removeCompany(index: number) {
      this.companies.removeAt(index);
    }

    ngOnDestroy() {
      console.log(this.form.value)
      this.taskService.form = this.form;
    }


}
